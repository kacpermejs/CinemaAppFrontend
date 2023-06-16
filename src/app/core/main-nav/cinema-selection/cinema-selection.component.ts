import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CinemaSelectionService } from '../../cinema-selection-service/cinema-selection.service';
import { ICinema } from '../../models/Cinema';

@Component({
  selector: 'app-cinema-selection',
  templateUrl: './cinema-selection.component.html',
  styleUrls: ['./cinema-selection.component.css']
})
export class CinemaSelectionComponent implements OnInit {
  selectedCinema: FormControl = new FormControl();
  cinemas: ICinema[] = [];

  constructor(private cinemaSelectionService: CinemaSelectionService) {}

  ngOnInit() {
    this.cinemaSelectionService.getCinemas().subscribe(cinemas => {
      this.cinemas = cinemas;
      const savedCinemaId = this.cinemaSelectionService.selectedCinemaId;
      if (savedCinemaId) {
        this.selectedCinema.setValue(+savedCinemaId);

      }
    });
  }

  saveSelection() {
    this.cinemaSelectionService.setCinema(this.selectedCinema.value);
  }
}

