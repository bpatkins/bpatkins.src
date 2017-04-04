import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [ slideInDownAnimation ]
})
export class HomeComponent {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
}
