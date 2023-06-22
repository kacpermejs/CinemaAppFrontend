import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesPageComponent } from './movies-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from 'src/app/shared/material.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { BookingPageComponent } from './booking/booking-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookingResultComponent } from './booking-result/booking-result.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPageComponent
  },
  {
    path: 'booking/result/:reservationId',
    component: BookingResultComponent
  },
  {
    path: 'booking/:movieId/:screeningId',
    component: BookingPageComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    MoviesPageComponent,
    MovieCardComponent,
    BookingPageComponent,
    BookingResultComponent
  ]
})
export class MoviesPageModule { }
