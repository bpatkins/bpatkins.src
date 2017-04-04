import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

    @Output() toggleSidebarEvent = new EventEmitter();

    triggerSidebarEvent() {
        this.toggleSidebarEvent.emit();
    }
}
