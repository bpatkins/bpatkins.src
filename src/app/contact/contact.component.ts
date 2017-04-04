import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [ slideInDownAnimation ]
})
export class ContactComponent {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
}
