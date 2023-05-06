import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesPageComponent } from './movies-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from 'src/app/shared/material.module';
import { MovieCardComponent } from './movie-card/movie-card.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPageComponent
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
    MovieCardComponent
  ]
})
export class MoviesPageModule { }
