import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
})
export class DatePickerComponent implements OnInit {
  constructor() {}
  maxDate: Date = new Date();
  @Output() newDate: EventEmitter<Date> = new EventEmitter();

  ngOnInit() {}
}
