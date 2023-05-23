import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketValidationPageComponent } from './ticket-validation-page.component';
import { RouterModule, Routes } from '@angular/router';

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
  ],
  declarations: [TicketValidationPageComponent]
})
export class TicketValidationPageModule { }
