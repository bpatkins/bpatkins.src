import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

@Component({
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    animations: [ slideInDownAnimation ]
})
export class SkillsComponent {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
}