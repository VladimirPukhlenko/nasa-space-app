import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
})
export class TruncateTextPipe implements PipeTransform {
  transform(text: string, maxLength: number = 1200) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, text.lastIndexOf('.', maxLength)) + '. ...';
  }
}
