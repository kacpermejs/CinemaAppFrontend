import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/AuthGuard';

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
  {
    path: 'login',
    loadChildren: () => import('./modules/login-page/login-page.module')
      .then(m => m.LoginPageModule)
  },
  {
    path: 'ticket-validation',
    loadChildren: () => import('./modules/ticket-validation-page/ticket-validation-page.module')
      .then(m => m.TicketValidationPageModule),
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
