import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TidyDelimiterPipe } from './tidy-delimiter.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TidyDelimiterPipe],
  exports: [TidyDelimiterPipe]
})

export class AppPipesModule { }
