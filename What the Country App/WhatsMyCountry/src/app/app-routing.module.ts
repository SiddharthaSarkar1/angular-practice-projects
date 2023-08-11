import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrycompComponent } from './countrycomp/countrycomp.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TempAppComponent } from './temp-app/temp-app.component';

const routes: Routes = [
  {
    path : '',
    component : LandingPageComponent
  },
  {
    path : 'tempapp',
    component : TempAppComponent
  },
  {
    path : 'wtc',
    component : CountrycompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
