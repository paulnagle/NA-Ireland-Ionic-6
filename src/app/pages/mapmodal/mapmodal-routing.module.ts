import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapmodalPage } from './mapmodal.page';

const routes: Routes = [
  {
    path: '',
    component: MapmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapmodalPageRoutingModule {}
