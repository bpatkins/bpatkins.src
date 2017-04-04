import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-sidebar-nav',
    templateUrl: './sidebar-nav.component.html',
    styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent {
    @Input() openSidebar: boolean;

    navigationRouted(event: Event) {
        this.openSidebar = false;
    }
 }