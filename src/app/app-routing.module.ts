import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home-page/home-page.module')
      .then(m => m.HomePageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./modules/movies-page/movies-page.module')
      .then(m => m.MoviesPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact-page/contact-page.module')
      .then(m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
