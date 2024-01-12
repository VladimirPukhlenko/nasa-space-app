import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFixed',
})
export class ToFixedPipe implements PipeTransform {
  transform(value: string, digits: number = 2): any {
    return Number(value).toFixed(digits);
  }
}
