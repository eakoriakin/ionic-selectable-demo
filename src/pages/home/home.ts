import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { InfiniteScroll, ModalController } from 'ionic-angular';
import { SelectSearchable } from 'ionic-select-searchable';
import { Port } from '../../types';
import { PortService } from '../../services';
import { ModalPage } from '../modal/modal';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    ports: Port[];
    ports10: Port[];
    portNames: string[];
    port1: Port;
    port2: Port;
    port3: Port;
    port4: Port;
    port5: Port;
    port6: Port;
    port7: Port;
    port9: string = 'Vladivostok';
    port10: Port;
    form: FormGroup;
    port8Control: FormControl;
    ports10Page = 2;

    constructor(
        private formBuilder: FormBuilder,
        private modalController: ModalController,
        private portService: PortService
    ) {
        this.ports = this.portService.getPorts();
        this.portNames = this.portService.getPorts().map(port => port.name);
        this.port2 = this.ports[1];
        this.port7 = this.ports[5];
        this.port8Control = this.formBuilder.control(this.ports[6], Validators.required);
        this.form = this.formBuilder.group({
            port8: this.port8Control
        });
        this.ports10 = this.portService.getPorts();
    }

    getMorePorts(event: { component: SelectSearchable, infiniteScroll: InfiniteScroll }) {
        // Trere're no more ports - disable infinite scroll.
        if (this.ports10Page > 3) {
            event.infiniteScroll.enable(false);
            return;
        }

        this.portService.getPortsAsync(this.ports10Page).subscribe(ports => {
            event.component.items = event.component.items.concat(ports);
            event.infiniteScroll.complete();
            this.ports10Page++;
        });
    }

    searchPorts(event: { component: SelectSearchable, text: string }) {
        let text = (event.text || '').trim().toLowerCase();

        if (!text) {
            event.component.items = [];
            return;
        } else if (event.text.length < 3) {
            return;
        }

        event.component.isSearching = true;

        this.portService.getPortsAsync().subscribe(ports => {
            event.component.items = ports.filter(port => {
                return port.name.toLowerCase().indexOf(text) !== -1 ||
                    port.country.toLowerCase().indexOf(text) !== -1;
            });

            event.component.isSearching = false;
        });
    }

    searchPorts10(event: { component: SelectSearchable, text: string }) {
        let text = (event.text || '').trim().toLowerCase();

        if (!text) {
            event.component.items = this.portService.getPorts();
            // Start infinite scroll from the beginning.
            this.ports10Page = 2;
            return;
        } else if (event.text.length < 3) {
            return;
        }

        event.component.isSearching = true;

        this.portService.getPortsAsync().subscribe(ports => {
            event.component.items = ports.filter(port => {
                return port.name.toLowerCase().indexOf(text) !== -1 ||
                    port.country.toLowerCase().indexOf(text) !== -1;
            });

            event.component.isSearching = false;
        });
    }

    portItemTemplate(port: Port) {
        return `${port.name} (${port.country})`;
    }

    portChange(event: { component: SelectSearchable, value: any }) {
        console.log('port:', event.value);
    }

    reset() {
        this.port8Control.reset();
    }

    openModal() {
        let modal = this.modalController.create(ModalPage);
        modal.present();
    }
}
