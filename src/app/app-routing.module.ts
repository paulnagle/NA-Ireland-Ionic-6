import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsPageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'jft',
    loadChildren: './jft/jft.module#JftPageModule'
  },
  {
    path: 'datetime',
    loadChildren: './datetime/datetime.module#DatetimePageModule'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactPageModule'
  },
  {
    path: 'map',
    loadChildren: './map/map.module#MapPageModule'
  },
  {
    path: 'speakers',
    loadChildren: './speakers/speakers.module#SpeakersPageModule'
  },
  {
    path: 'events',
    loadChildren: './events/events.module#EventsPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
