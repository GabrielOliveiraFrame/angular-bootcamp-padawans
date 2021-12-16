import { Pipe, PipeTransform } from '@angular/core';
import * as StringMask from 'string-mask';

@Pipe({
  name: 'hour'
})
export class HourPipe implements PipeTransform {

  transform(value: string): string {
    let hourMask = new StringMask('00:00');
    let result = hourMask.apply(value);
    return result;
  }

}
