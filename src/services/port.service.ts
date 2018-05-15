import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';
import { Country, Port } from '../types';

@Injectable()
export class PortService {
    private countries: Country[] = [{
        id: 0,
        name: 'Japan',
        ports: [
            { id: 0, name: 'Tokai' }
        ]
    }, {
        id: 2,
        name: 'Russia',
        ports: [
            { id: 2, name: 'Vladivostok' }
        ]
    }, {
        id: 3,
        name: 'India',
        ports: [
            { id: 3, name: 'Navlakhi' }
        ]
    }, {
        id: 4,
        name: 'Cayman Islands',
        ports: [
            { id: 4, name: 'Cayman Brac' }
        ]
    }, {
        id: 6,
        name: 'Egypt',
        ports: [
            { id: 6, name: 'Port Ibrahim' }
        ]
    }, {
        id: 7,
        name: 'Finland',
        ports: [
            { id: 7, name: 'Brahestad' },
            { id: 37, name: 'Kantvik' }
        ]
    }, {
        id: 8,
        name: 'Germany',
        ports: [
            { id: 8, name: 'Brake' }
        ]
    }, {
        id: 9,
        name: 'Canada',
        ports: [
            { id: 9, name: 'Hantsport NS' }
        ]
    }, {
        id: 10,
        name: 'Cape Verde',
        ports: [
            { id: 10, name: 'Santa Maria Bay' }
        ]
    }, {
        id: 11,
        name: 'Chile',
        ports: [
            { id: 11, name: 'Antofagasta' },
            { id: 12, name: 'San Antonio' },
            { id: 13, name: 'Santa Barbara' }
        ]
    }, {
        id: 12,
        name: 'Argentina',
        ports: [
            { id: 14, name: 'Cabo San Antonio' },
            { id: 15, name: 'Diamante' },
            { id: 16, name: 'San Antonio Este Arg' },
            { id: 44, name: 'Santa Cruz' }
        ]
    }, {
        id: 13,
        name: 'Curacao',
        ports: [
            { id: 17, name: 'Santa Anna Bay' }
        ]
    }, {
        id: 14,
        name: 'Sri Lanka',
        ports: [
            { id: 18, name: 'Hambantota' }
        ]
    }, {
        id: 15,
        name: 'Madagascar',
        ports: [
            { id: 19, name: 'Antananarivo' }
        ]
    }, {
        id: 5,
        name: 'Brazil',
        ports: [
            { id: 51, name: 'Areia Branca' },
            { id: 52, name: 'Navegantes' },
            { id: 53, name: 'Antonina' },
            { id: 54, name: 'Santos' },
            { id: 55, name: 'Paranagua' },
            { id: 56, name: 'Sao Francisco do Sul' },
            { id: 57, name: 'Angra dos Reis' },
            { id: 58, name: 'Rio de Janeiro' },
            { id: 59, name: 'Vitoria' },
            { id: 60, name: 'Porto Alegre' },
            { id: 61, name: 'Itajai' },
            { id: 62, name: 'Imbituba' },
            { id: 63, name: 'Pelotas' },
            { id: 64, name: 'Tubarao' },
            { id: 65, name: 'Fortaleza' },
            { id: 66, name: 'Cabedelo' },
            { id: 67, name: 'Sao Luis' },
            { id: 68, name: 'Natal' },
            { id: 69, name: 'Trombetas' }
        ]
    }, {
        id: 16,
        name: 'Ireland',
        ports: [
            { id: 21, name: 'Bantry Bay' }
        ]
    }, {
        id: 17,
        name: 'Italy',
        ports: [
            { id: 22, name: 'Porto Levante' }
        ]
    }, {
        id: 18,
        name: 'Greece',
        ports: [
            { id: 23, name: 'Port of Antikyra' }
        ]
    }, {
        id: 19,
        name: 'Malaysia',
        ports: [
            { id: 38, name: 'Kuantan' },
            { id: 24, name: 'Berantai FPSO' }
        ]
    }, {
        id: 20,
        name: 'Spain',
        ports: [
            { id: 25, name: 'Alicante' },
            { id: 45, name: 'Santa Eugenia De Riveira' }
        ]
    }, {
        id: 21,
        name: 'Panama',
        ports: [
            { id: 26, name: 'Almirante' }
        ]
    }, {
        id: 22,
        name: 'China',
        ports: [
            { id: 39, name: 'Lantian' },
            { id: 27, name: 'Canton' },
            { id: 42, name: 'Nantong' }
        ]
    }, {
        id: 23,
        name: 'Somalia',
        ports: [
            { id: 28, name: 'Dante' }
        ]
    }, {
        id: 24,
        name: 'United States',
        ports: [
            { id: 29, name: 'Davant LA' }
        ]
    }, {
        id: 25,
        name: 'Australia',
        ports: [
            { id: 30, name: 'Fremantle' }
        ]
    }, {
        id: 26,
        name: 'Philippines',
        ports: [
            { id: 31, name: 'General Santos' }
        ]
    }, {
        id: 27,
        name: 'United Kingdom',
        ports: [
            { id: 32, name: 'Granton' }
        ]
    }, {
        id: 28,
        name: 'Venezuela',
        ports: [
            { id: 33, name: 'Guanta' }
        ]
    }, {
        id: 29,
        name: 'Indonesia',
        ports: [
            { id: 35, name: 'Kalimantan' }
        ]
    }, {
        id: 30,
        name: 'Thailand',
        ports: [
            { id: 36, name: 'Kantang' }
        ]
    }, {
        id: 31,
        name: 'Ecuador',
        ports: [
            { id: 40, name: 'Manta' }
        ]
    }, {
        id: 32,
        name: 'France',
        ports: [
            { id: 41, name: 'Mantes' }
        ]
    }];

    getCountries(page?: number, size?: number): Country[] {
        let countries = [];

        if (page && size) {
            countries = this.countries.slice((page - 1) * size, ((page - 1) * size) + size);
        } else {
            countries = this.countries;
        }

        return countries;
    }


    getPorts(page?: number, size?: number): Port[] {
        let ports = [];

        this.countries.forEach(country => {
            country.ports.forEach(port => {
                port.country = country;
                ports.push(port);
            });
        });

        if (page && size) {
            ports = ports.slice((page - 1) * size, ((page - 1) * size) + size);
        }

        return ports;
    }

    getPortsAsync(page?: number, size?: number, timeout = 2000): Observable<Port[]> {
        return new Observable<Port[]>(observer => {
            observer.next(this.getPorts(page, size));
            observer.complete();
        }).pipe(delay(timeout));
    }
}
