# Ionic Select with Searchbar
* [Description](#description)
* [Demo](#demo)
* [Usage](#usage)
  * [Adding it to your project](#adding-it-to-your-project)
  * [Using it with Angular Forms](#using-it-with-angular-forms)
* [Fields](#fields)
  * [items](#items)
  * [itemTemplate](#itemtemplate)
  * [isSearching](#issearching)
  * [itemValueField](#itemvaluefield)
  * [itemTextField](#itemtextfield)
  * [canSearch](#cansearch)
  * [canReset](#canreset)
  * [multiple](#multiple)
  * [title](#title)
  * [searchPlaceholder](#searchplaceholder)
* [Events](#events)
  * [onChange](#onchange)
  * [onSearch](#onsearch)
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
            title="Port"
            [(ngModel)]="port"
            [items]="ports"
            itemValueField="id"
            itemTextField="name"
            [canSearch]="true"
            (onChange)="portChange($event)">
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

### Using it with Angular Forms
SelectSearchable component is fully compatible with [Angular 2 Forms](https://angular.io/docs/ts/latest/guide/forms.html) and can be used with both `ngModel` or `FormControl`.

## Fields

## items
A list of items.

### Type
`Array`  

### Default value
`[]`

## itemTemplate
A function used to create a text for each item which will be displayed in the list.

### Type
`Function`  

### Default value
`null`

## isSearching
Use it to show or hide loading spinner for AJAX search.

### Type
`boolean`  

### Default value
`false`

## itemValueField
The name of item field which will be used as a unique identifier of the item. The name can be a property, e.g, `id`.  

### Type
`String`  

### Default value
`null`

## itemTextField
The name of item field which will be displayed in the list.  
The field is relevant only when `items` is an array of objects.

### Type
`String`  

### Default value
`null`

## canSearch
Determines whether to show Searchbar.

### Type
`Boolean`

## Default value
`false`

## canReset
Determines whether to show Clear button which clears a value.

### Type
`Boolean`

### Default value
`false`

## multiple
Determines whether multiple items can be selected.

### Type
`Boolean`

### Default value
`false`

### title
A title.

### Type
`String`  

### Default value
`null`

## searchPlaceholder
A placeholder for Searchbar.

### Type
`String`  

### Default value
`null`

## Events

## onChange
Fires when the value is changed by the user.

### Parameters
**event** `{ component: SelectSearchable, value: any }`  
An object containing a reference to the component and a selected value.

## onSearch
Fires when the user is typing in Searchbar.

### Parameters
**event** `{ component: SelectSearchable, text: String }`  
An object containing a reference to the component and typed text.

## Development
1. Install dependencies.  
`npm install`  
2. Start the demo.  
`ionic serve`  
