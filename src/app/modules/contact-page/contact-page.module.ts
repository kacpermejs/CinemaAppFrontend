import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from 'src/app/shared/shared.material.module';

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
    SharedMaterialModule
  ],
  declarations: [ContactPageComponent]
})
export class ContactPageModule { }
