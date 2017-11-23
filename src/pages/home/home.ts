import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectSearchable } from '../../components/select-searchable/select-searchable';
import { Port } from '../../types/types';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    ports: Port[];
    portNames: string[];
    port1: Port;
    port2: Port;
    port3: Port;
    port4: Port;
    port5: Port;
    port6: Port;
    port7: Port;
    port9: string = 'Vladivostok';
    form: FormGroup;
    port8Control: FormControl;

    constructor(private formBuilder: FormBuilder) {
        this.ports = this.getPorts();
        this.portNames = this.getPorts().map(port => port.name);
        this.port2 = this.ports[1];
        this.port7 = this.ports[5];
        this.port8Control = this.formBuilder.control(this.ports[6], Validators.required);
        this.form = this.formBuilder.group({
            port8: this.port8Control
        });
    }

    getPorts(): Port[] {
        return [
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
            { id: 24, name: 'Berantai FPSO', country: 'Malaysia' }
        ];
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

        // Simulate AJAX.
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
