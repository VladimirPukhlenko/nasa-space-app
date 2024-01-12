import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { PicOfTheDayComponent } from './pages/pic-of-the-day/pic-of-the-day.component';
import { AsteroidsComponent } from './pages/asteroids/asteroids.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  {
    path: 'pic_of_the_day',
    component: PicOfTheDayComponent,
    pathMatch: 'full',
  },
  {
    path: 'asteroids',
    component: AsteroidsComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
