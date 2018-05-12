import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { Port } from '../../types';
import { PortsItemTemplateDirective } from './ports-item-template';
import { PortsValueTemplateDirective } from './ports-value-template';
import { PortsTitleTemplateDirective } from './ports-title-template';

@Component({
    selector: 'ports',
    templateUrl: 'ports.html'
})
export class PortsComponent {
    @Input() ports: Port[] = [];
    @ContentChild(PortsItemTemplateDirective, { read: TemplateRef }) portsItemTemplate: TemplateRef<any>;
    @ContentChild(PortsValueTemplateDirective, { read: TemplateRef }) portsValueTemplate: TemplateRef<any>;
    @ContentChild(PortsTitleTemplateDirective, { read: TemplateRef }) portsTitleTemplate: TemplateRef<any>;
    value: Port;

    constructor() { }

    ngAfterViewInit() {
        setTimeout(() => {
            this.value = this.ports[0];
        }, 4000);
    }
}
