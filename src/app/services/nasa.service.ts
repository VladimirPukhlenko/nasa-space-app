import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from '../../environments/environments';
import { IImageCollection } from '../types/imageCollection.interface';
import { IPicOfTheDay } from '../types/picOfTheDay.interface';
import { DateService } from './date.service';
import { NEOData } from '../types/asteroids.interface';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(
    private readonly http: HttpClient,
    private dateService: DateService
  ) {}
  private readonly searchUrl = 'https://images-api.nasa.gov/search';
  private readonly picOfTheDayUrl = `https://api.nasa.gov/planetary/apod?api_key=${environment.API_KEY}`;
  private readonly asteroidsUrl = `https://api.nasa.gov/neo/rest/v1/feed?api_key=${environment.API_KEY}`;

  find(search: string) {
    const options: { params: HttpParams } = {
      params: new HttpParams().set('media_type', 'image').set('q', search),
    };

    return this.http
      .get<IImageCollection>(this.searchUrl, options)
      .pipe(map((item) => item.collection.items));
  }

  findPictureByDate(date: string) {
    const previousDate = this.dateService.getPreviousDate(date);
    const options: { params: HttpParams } = {
      params: new HttpParams()
        .set('start_date', previousDate)
        .set('end_date', date),
    };

    return this.http.get<IPicOfTheDay[]>(this.picOfTheDayUrl, options);
  }

  getAsteroidsInfo(date: string) {
    const options: { params: HttpParams } = {
      params: new HttpParams().set('start_date', date).set('end_date', date),
    };

    return this.http.get<NEOData>(this.asteroidsUrl, options);
  }
}
