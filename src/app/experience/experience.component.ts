import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [ slideInDownAnimation ]
})
export class ExperienceComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
}

