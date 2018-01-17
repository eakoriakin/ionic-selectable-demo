import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { InfiniteScroll } from 'ionic-angular';
import { SelectSearchable } from '../../components/select-searchable/select-searchable';
import { Port } from '../../types/types';

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

    constructor(private formBuilder: FormBuilder) {
        this.ports = this.getPorts();
        this.portNames = this.getPorts().map(port => port.name);
        this.port2 = this.ports[1];
        this.port7 = this.ports[5];
        this.port8Control = this.formBuilder.control(this.ports[6], Validators.required);
        this.form = this.formBuilder.group({
            port8: this.port8Control
        });
        this.ports10 = this.getPorts();
    }

    getPorts(page: number = 1, size: number = 15): Port[] {
        let ports = [
            { id: 0, name: 'Tokai', country: 'Japan' },
            { id: 2, name: 'Vladivostok', country: 'Russia' },
            { id: 3, name: 'Navlakhi', country: 'India' },
            { id: 4, name: 'Cayman Brac', country: 'Cayman Islands' },
            { id: 5, name: 'Areia Branca', country: 'Brazil' },
            { id: 6, name: 'Port Ibrahim', country: 'Egypt' },
            { id: 7, name: 'Brahestad', country: 'Finland' },
            { id: 8, name: 'Brake', country: 'Germany' },
            { id: 9, name: 'Hantsport NS', country: 'Canada' },
            { id: 10, name: 'Santa Maria Bay', country: 'Cape Verde' },
            { id: 11, name: 'Antofagasta', country: 'Chile' },
            { id: 12, name: 'San Antonio', country: 'Chile' },
            { id: 13, name: 'Santa Barbara', country: 'Chile' },
            { id: 14, name: 'Cabo San Antonio', country: 'Argentina' },
            { id: 15, name: 'Diamante', country: 'Argentina' },
            { id: 16, name: 'San Antonio Este Arg', country: 'Argentina' },
            { id: 17, name: 'Santa Anna Bay', country: 'Curacao' },
            { id: 18, name: 'Hambantota', country: 'Sri Lanka' },
            { id: 19, name: 'Antananarivo', country: 'Madagascar' },
            { id: 20, name: 'Navegantes', country: 'Brazil' },
            { id: 21, name: 'Bantry Bay', country: 'Ireland' },
            { id: 22, name: 'Porto Levante', country: 'Italy' },
            { id: 23, name: 'Port of Antikyra', country: 'Greece' },
            { id: 24, name: 'Berantai FPSO', country: 'Malaysia' },
            { id: 25, name: "Alicante", country: 'Spain' },
            { id: 26, name: "Almirante", country: 'Panama' },
            { id: 27, name: "Canton", country: 'China' },
            { id: 28, name: "Dante", country: 'Somalia' },
            { id: 29, name: "Davant LA", country: 'United States' },
            { id: 30, name: "Fremantle", country: 'Australia' },
            { id: 31, name: "General Santos", country: 'Philippines' },
            { id: 32, name: "Granton", country: 'United Kingdom' },
            { id: 33, name: "Guanta", country: 'Venezuela' },
            { id: 34, name: "Hambantota", country: 'Sri Lanka' },
            { id: 35, name: "Kalimantan", country: 'Indonesia' },
            { id: 36, name: "Kantang", country: 'Thailand' },
            { id: 37, name: "Kantvik", country: 'Finland' },
            { id: 38, name: "Kuantan", country: 'Malaysia' },
            { id: 39, name: "Lantian", country: 'China' },
            { id: 40, name: "Manta", country: 'Ecuador' },
            { id: 41, name: "Mantes", country: 'France' },
            { id: 42, name: "Nantong", country: 'China' },
            { id: 43, name: "Antonina", country: 'Brazil' },
            { id: 44, name: "Santa Cruz", country: 'Argentina' },
            { id: 45, name: "Santa Eugenia De Riveira", country: 'Spain' }
        ];

        return ports.slice((page - 1) * size, ((page - 1) * size) + size);
    }

    getMorePorts(event: { component: SelectSearchable, infiniteScroll: InfiniteScroll }) {
        // Trere're no more ports - disable infinite scroll.
        if (this.ports10Page > 3) {
            event.infiniteScroll.enable(false);
            return;
        }

        // Simulate async operation.
        setTimeout(() => {
            event.component.items = event.component.items.concat(this.getPorts(this.ports10Page));
            event.infiniteScroll.complete();
            this.ports10Page++;
        }, 2000);
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

        // Simulate async operation.
        setTimeout(() => {
            event.component.items = this.getPorts().filter(port => {
                return port.name.toLowerCase().indexOf(text) !== -1 ||
                    port.country.toLowerCase().indexOf(text) !== -1;
            });

            event.component.isSearching = false;
        }, 2000);
    }

    portTemplate(port: Port) {
        return `${port.name} (${port.country})`;
    }

    portChange(event: { component: SelectSearchable, value: any }) {
        console.log('value:', event.value);
    }

    reset() {
        this.port8Control.reset();
    }
}
