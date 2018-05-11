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
    port11: Port;
    port12: Port;
    port13: Port;
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
        this.port11 = this.ports[1];
    }

    filterPorts(ports: Port[], text: string) {
        return ports.filter(port => {
            return port.name.toLowerCase().indexOf(text) !== -1 ||
                port.country.toLowerCase().indexOf(text) !== -1;
        });
    }

    getMorePorts(event: { component: SelectSearchable, infiniteScroll: InfiniteScroll, text: string }) {
        let text = (event.text || '').trim().toLowerCase();

        // Trere're no more ports - disable infinite scroll.
        if (this.ports10Page > 3) {
            event.infiniteScroll.enable(false);
            return;
        }

        this.portService.getPortsAsync(this.ports10Page).subscribe(ports => {
            ports = event.component.items.concat(ports);

            if (text) {
                ports = this.filterPorts(ports, text);
            }

            event.component.items = ports;
            event.infiniteScroll.complete();
            this.ports10Page++;
        });
    }

    searchPorts(event: { component: SelectSearchable, infiniteScroll: InfiniteScroll, text: string }) {
        let text = (event.text || '').trim().toLowerCase();

        if (!text) {
            event.component.items = [];
            return;
        } else if (event.text.length < 1) {
            return;
        }

        event.component.isSearching = true;

        this.portService.getPortsAsync().subscribe(ports => {
            event.component.items = this.filterPorts(ports, text);
            event.component.isSearching = false;
        });
    }

    searchPortsInfinite(event: { component: SelectSearchable, infiniteScroll: InfiniteScroll, text: string }) {
        let text = (event.text || '').trim().toLowerCase();

        if (!text) {
            event.component.items = this.portService.getPorts();
            // Start infinite scroll from the beginning.
            this.ports10Page = 2;

            if (event.infiniteScroll) {
                event.infiniteScroll.enable(true);
            }
            return;
        } else if (event.text.length < 1) {
            return;
        }

        event.component.isSearching = true;

        this.portService.getPortsAsync().subscribe(ports => {
            event.component.items = this.filterPorts(ports, text);
            event.component.isSearching = false;
        });
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
