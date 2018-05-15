import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReportComponent } from './report/report.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path: 'splashscreen', component: SplashscreenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'report', component: ReportComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
