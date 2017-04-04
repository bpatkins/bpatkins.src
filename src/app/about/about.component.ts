import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [ slideInDownAnimation ]
})
export class AboutComponent {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
}

