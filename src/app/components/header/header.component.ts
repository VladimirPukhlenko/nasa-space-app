import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environments';

const links = [
  {
    icon: 'home',
    title: 'Home',
    path: '',
  },
  {
    icon: 'image',
    title: 'Picture of the day',
    path: 'pic_of_the_day',
  },
  {
    icon: 'public',
    title: 'Asteroids',
    path: 'asteroids',
  },
];
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  links = links;

  constructor() {}
}
