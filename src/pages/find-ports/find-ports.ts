import { Component } from '@angular/core';
import { InfiniteScroll } from 'ionic-angular';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { PortService } from '../../services';
import { Country, Port } from '../../types';

@Component({
    selector: 'page-find-ports',
    templateUrl: 'find-ports.html'
})
export class FindPortsPage {
    ports: Port[];
    countries: Country[];
    country: Port;
    port: Port;

    constructor(
        private portService: PortService
    ) {
        this.ports = this.portService.getPorts();
        this.countries = this.portService.getCountries();
    }

    filterPorts(ports: Port[], text: string) {
        return ports.filter(port => {
            return port.name.toLowerCase().indexOf(text) !== -1 ||
                port.country.name.toLowerCase().indexOf(text) !== -1;
        });
    }

    formatPorts(ports: Port[]) {
        return ports.map(port => {
            return port.name;
        }).join(', ');
    }

    searchPorts(event: {
        component: SelectSearchableComponent,
        infiniteScroll: InfiniteScroll,
        text: string
    }) {
        let text = (event.text || '').trim().toLowerCase();

        if (!text) {
            event.component.items = [];
            return;
        } else if (event.text.length < 1) {
            return;
        }

        event.component.isSearching = true;

        this.portService.getPortsAsync().subscribe(ports => {
            let items = this.filterPorts(ports, text);

            if (this.country) {
                items = items.filter(port => port.country.id === this.country.id);
            }

            event.component.items = items;
            event.component.isSearching = false;
        });
    }

    portChange(event: {
        component: SelectSearchableComponent,
        value: any
    }) {
        console.log('port:', event.value);
    }
}
