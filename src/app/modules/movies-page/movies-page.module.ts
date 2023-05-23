import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesPageComponent } from './movies-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from 'src/app/shared/material.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { BookingPageComponent } from './booking/booking-page.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPageComponent
  },
  {
    path: 'booking/:movieId/:screeningId',
    component: BookingPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule
  ],
  declarations: [
    MoviesPageComponent,
    MovieCardComponent,
    BookingPageComponent
  ]
})
export class MoviesPageModule { }
