# Ionic Select with Searchbar
* [Description](#description)
* [Demo](#demo)
* [Usage](#usage)
* [Development](#development)

## Description
A component styled as ion-select, which allows to search items, including AJAX search.

## Demo
Here is a [Plunker demo](http://plnkr.co/edit/YzCBKS?p=preview) and below are some screenshots.

### iOS
![iOS Demo 1](demo/ios-1.png)
![iOS Demo 2](demo/ios-2.png)

### Android
![Android Demo 1](demo/android-1.png)
![Android Demo 2](demo/android-2.png)

## Usage

### Adding it to your project
1. Copy files from `src/components/select-searchable/` folder to your project.
2. Add `SelectSearchableModule` module to imports array of your app module.
```
    import { SelectSearchableModule } from '../components/select-searchable/select-searchable-module';

    @NgModule({
        imports: [ SelectSearchableModule ],
    })
    export class AppModule { }
```
3. Add it to a page.

HTML:

    <ion-item>
        <select-searchable
            [(ngModel)]="port"
            title="Port"
            itemValueField="id"
            itemTextField="name"
            [items]="ports"
            [canSearch]="true">
        </select-searchable>
    </ion-item>

TypeScript:

    import { Component } from '@angular/core';
    import { SelectSearchable } from '../components/select-searchable/select-searchable-module';

    class Port {
        public id: number;
        public name: string;
        public country: string;
    }

    @Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    })
    export class HomePage {
        ports: Port[];
        port: Port;

        constructor() {
            this.ports = [
                { id: 0, name: 'Tokai', country: 'Japan' },
                { id: 1, name: 'Vladivostok', country: 'Russia' },
                { id: 2, name: 'Navlakhi', country: 'India' }
            ];
        }

        portChange(event: { component: SelectSearchable, value: any }) {
            console.log('value:', event.value);
        }
    }

## Development
1. Install dependencies.  
`npm install`  
2. Start the demo.  
`ionic serve`  
