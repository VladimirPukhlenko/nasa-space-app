import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  public formatDate(
    dateString: string = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
    })
  ) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  public getPreviousDate(dateStr: string, daysBefore: number = 4) {
    const [year, monthIndex, date]: number[] = dateStr
      .split('-')
      .map((part) => +part);
    const inputDate: Date = new Date(year, monthIndex - 1, date);

    const previousDate: Date = new Date(inputDate);
    previousDate.setDate(inputDate.getDate() - daysBefore);

    const formattedDate = [
      previousDate.getFullYear(),
      previousDate.getMonth() + 1,
      previousDate.getDate(),
    ];

    return formattedDate.join('-');
  }
}
