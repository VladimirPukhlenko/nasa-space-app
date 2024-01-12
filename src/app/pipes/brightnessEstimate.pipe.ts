import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brightnessEstimate',
})
export class BrightnessEstimatePipe implements PipeTransform {
  transform(value: number): string {
    switch (true) {
      case value <= -1:
        return 'Very Bright';
      case value >= 0 && value <= 3:
        return 'Bright';
      case value >= 4 && value <= 6:
        return 'Moderately Bright';
      case value >= 7 && value <= 10:
        return 'Dim';
      default:
        return 'Very Dim';
    }
  }
}
