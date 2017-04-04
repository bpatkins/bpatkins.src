import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }