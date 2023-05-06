import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from 'src/app/shared/material.module';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    ContactPageComponent,
    NewsletterFormComponent
  ]
})
export class ContactPageModule { }
