import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations: [ slideInDownAnimation ]
})
export class NotFoundComponent {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
}
