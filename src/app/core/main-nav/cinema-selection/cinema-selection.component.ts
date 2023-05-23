import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cinema-selection',
  templateUrl: './cinema-selection.component.html',
  styleUrls: ['./cinema-selection.component.css']
})
export class CinemaSelectionComponent {

  cinemaName: string = '';

  constructor(
    public dialogRef: MatDialogRef<CinemaSelectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close('');
  }

  onSave(): void {
    this.dialogRef.close(this.cinemaName);
  }

}
