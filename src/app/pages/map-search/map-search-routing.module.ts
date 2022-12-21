import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapSearchPage } from './map-search.page';

const routes: Routes = [
  {
    path: '',
    component: MapSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapSearchPageRoutingModule {}