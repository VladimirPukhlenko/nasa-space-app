import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, VirtualTimeScheduler, map, tap } from 'rxjs';
import { DateService } from 'src/app/services/date.service';
import { NasaService } from 'src/app/services/nasa.service';
import { NEOData, NearEarthObject } from 'src/app/types/asteroids.interface';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
})
export class AsteroidsComponent implements OnInit {
  asteroidsData$!: Observable<NearEarthObject[]>;
  date = this.dateService.formatDate();

  constructor(
    private nasaService: NasaService,
    private dateService: DateService
  ) {}
  ngOnInit(): void {
    this.asteroidsData$ = this.nasaService
      .getAsteroidsInfo(this.date)
      .pipe(map((item) => item.near_earth_objects[this.date]));
  }

  onDateChange(newDate: Date) {
    const dateWithCorrectTimeZone = newDate.toLocaleString('en-US', {
      timeZone: 'America/New_York',
    });
    this.date = this.dateService.formatDate(dateWithCorrectTimeZone);

    this.asteroidsData$ = this.nasaService
      .getAsteroidsInfo(this.date)
      .pipe(map((item) => item.near_earth_objects[this.date]));
  }
}
