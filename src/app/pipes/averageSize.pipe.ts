import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'averageSize',
})
export class AverageSizePipe implements PipeTransform {
  transform(value: {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
  }) {
    const result = Number(
      (value.estimated_diameter_max + value.estimated_diameter_min) / 2
    ).toFixed(2);
    return result;
  }
}
