import { NgModule } from '@angular/core';
import { TidyDelimiterPipe } from 'src/app/pipes/tidy-delimiter.pipe';
import { NoSanitizePipe } from 'src/app/pipes/no-sanitize.pipe';
import { ParseFloatPipe } from 'src/app/pipes/parse-float.pipe';


@NgModule({
  declarations: [
    TidyDelimiterPipe,
    NoSanitizePipe,
    ParseFloatPipe
  ],
  imports: [],
  exports: [
    TidyDelimiterPipe,
    NoSanitizePipe,
    ParseFloatPipe
  ]
})
export class PipesModule { }
