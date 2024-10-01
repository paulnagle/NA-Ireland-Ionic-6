import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noSanitize',
  standalone: true
})
export class NoSanitizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
