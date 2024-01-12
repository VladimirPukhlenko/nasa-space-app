import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizeSpeedColorizer',
})
export class SizeSpeedColorizerPipe implements PipeTransform {
  transform(val: string | number, type: 'size' | 'velocity') {
    const value = +val;
    switch (type) {
      case 'size':
        switch (true) {
          case value > 2_000:
            return '🔴';
          case value >= 1_000 && value <= 2_000:
            return '🟠';
          case value >= 500 && value < 1_000:
            return '🟡';
          case value >= 100 && value < 500:
            return '🟢';
          default:
            return '⚪';
        }
      case 'velocity':
        switch (true) {
          case value > 140_000:
            return '🔴';
          case value >= 70_000 && value <= 140_000:
            return '🟠';
          case value >= 40_000 && value < 70_000:
            return '🟡';
          case value >= 20_000 && value < 40_000:
            return '🟢';
          default:
            return '⚪';
        }
      default:
        return '';
    }
  }
}
