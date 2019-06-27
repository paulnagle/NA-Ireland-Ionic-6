import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tidyDelimiter'
})
export class TidyDelimiterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace('#@-@#', ' : ');
  }

}
