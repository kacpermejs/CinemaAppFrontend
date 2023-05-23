import { Component, OnInit } from '@angular/core';
import { ISeat } from 'src/app/core/models/ISeat';
import { Seat } from 'src/app/core/models/Seat';


@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  seats: ISeat[][] = [];
  rows = 6;
  columns = 12;

  constructor() {
    for (let r = 0; r < 6; r++) {
      this.seats.push([]);
      for (let c = 0; c < 12; c++) {
        this.seats[r].push(new Seat(Math.random() >= 0.5, "1", "B"))
      }
    }
    console.log(this.seats);

  }

  ngOnInit() {
  }

}
