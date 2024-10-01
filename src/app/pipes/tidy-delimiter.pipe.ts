import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tidyDelimiter',
  standalone: true
})
export class TidyDelimiterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
