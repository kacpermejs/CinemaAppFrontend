import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingPageComponent } from './booking-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from 'src/app/shared/material.module';

const routes: Routes = [
  {
    path: '',
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
    BookingPageComponent,
  ]
})
export class BookingPageModule { }
