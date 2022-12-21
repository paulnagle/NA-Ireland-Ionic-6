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
  { path: 'speakers', loadChildren: () => import('./pages/speakers/speakers.module').then( m => m.SpeakersPageModule) },
  { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule) },
  { path: 'map-search', loadChildren: () => import('./pages/map-search/map-search.module').then( m => m.MapSearchPageModule) },
  { path: 'modal', loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
