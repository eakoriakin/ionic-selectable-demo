import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectSearchable } from './select-searchable';
import { SelectSearchablePage } from './select-searchable-page';

@NgModule({
    declarations: [
        SelectSearchable,
        SelectSearchablePage
    ],
    imports: [
        IonicPageModule.forChild(SelectSearchable),
        IonicPageModule.forChild(SelectSearchablePage)
    ],
    exports: [
        SelectSearchable,
        SelectSearchablePage
    ],
    entryComponents: [
        SelectSearchable,
        SelectSearchablePage
    ]
})
export class SelectSearchableModule { }