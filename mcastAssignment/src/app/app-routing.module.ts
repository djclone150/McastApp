import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'feed-single',
    loadChildren: () => import('./feed-single/feed-single.module').then( m => m.FeedSinglePageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'institutes',
    loadChildren: () => import('./institutes/institutes.module').then( m => m.InstitutesPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'institute/:code',
    loadChildren: () => import('./institute/institute.module').then( m => m.InstitutePageModule)
  }

  /*{
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
