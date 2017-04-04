import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openSidebar = false;

  toggleSidebar(event: Event) {
    this.openSidebar = !this.openSidebar;
  }
}
