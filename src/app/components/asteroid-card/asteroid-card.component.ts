import { Component, Input, OnInit } from '@angular/core';
import { NearEarthObject } from 'src/app/types/asteroids.interface';

@Component({
  selector: 'app-asteroid-card',
  templateUrl: './asteroid-card.component.html',
})
export class AsteroidCardComponent implements OnInit {
  @Input() asteroid!: NearEarthObject;
  constructor() {}

  ngOnInit() {}
}
