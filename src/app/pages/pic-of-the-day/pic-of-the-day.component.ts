import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Observable, take, tap } from 'rxjs';
import { DateService } from 'src/app/services/date.service';
import { NasaService } from 'src/app/services/nasa.service';
import { IImageCollectionItem } from 'src/app/types/imageCollection.interface';
import { IPicOfTheDay } from 'src/app/types/picOfTheDay.interface';

@Component({
  selector: 'app-pic-of-the-day',
  templateUrl: './pic-of-the-day.component.html',
})
export class PicOfTheDayComponent implements OnInit {
  constructor(
    private nasaService: NasaService,
    private dateService: DateService
  ) {}
  currentPicture!: number;
  images$!: Observable<IPicOfTheDay[]>;

  changeCurrentPicture(index: number) {
    this.currentPicture = index;
  }

  onDateChange(newDate: Date) {
    const dateWithCorrectTimeZone = newDate.toLocaleString('en-US', {
      timeZone: 'America/New_York',
    });
    this.images$ = this.nasaService
      .findPictureByDate(this.dateService.formatDate(dateWithCorrectTimeZone))
      .pipe(tap((images) => (this.currentPicture = images.length - 1)));
  }

  ngOnInit() {
    this.images$ = this.nasaService
      .findPictureByDate(this.dateService.formatDate())
      .pipe(tap((images) => (this.currentPicture = images.length - 1)));
  }
}
