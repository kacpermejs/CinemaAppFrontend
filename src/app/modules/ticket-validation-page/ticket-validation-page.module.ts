import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketValidationPageComponent } from './ticket-validation-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TicketValidationPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
    ReactiveFormsModule
  ],
  declarations: [TicketValidationPageComponent]
})
export class TicketValidationPageModule { }
