import { Component, Input, TemplateRef } from '@angular/core';
import { Port } from '../../types';

@Component({
    selector: 'ports',
    templateUrl: 'ports.html'
})
export class PortsComponent {
    @Input() portTemplate: TemplateRef<any>;
    @Input() valueTemplate: TemplateRef<any>;
    @Input() ports: Port[] = [];
    @Input() isMultiple = false;

    constructor() { }
}
