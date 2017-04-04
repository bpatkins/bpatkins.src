import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidebar-content',
    templateUrl: './sidebar-content.component.html',
    styleUrls: ['./sidebar-content.component.css']
})
export class SidebarContentComponent { 
    @Output() navigationRouteEvent = new EventEmitter();

    triggerNavigationRouteEvent() {
        this.navigationRouteEvent.emit();
    }
}