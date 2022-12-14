import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule) },
  { path: 'datetime', loadChildren: () => import('./pages/datetime/datetime.module').then( m => m.DatetimePageModule) },
  { path: 'events', loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
  { path: 'jft', loadChildren: () => import('./pages/jft/jft.module').then( m => m.JftPageModule) },
  { path: 'list', loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule) },
  { path: 'map', loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule) },
  { path: 'mapmodal', loadChildren: () => import('./pages/mapmodal/mapmodal.module').then( m => m.MapmodalPageModule) },
  { path: 'speakers', loadChildren: () => import('./pages/speakers/speakers.module').then( m => m.SpeakersPageModule) },
  { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
