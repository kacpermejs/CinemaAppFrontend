import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [],
  exports: [
    MatIconModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
