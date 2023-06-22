import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-result',
  templateUrl: './booking-result.component.html',
  styleUrls: ['./booking-result.component.css']
})
export class BookingResultComponent implements OnInit {
  reservationId?: string;
  isError: boolean = false;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.reservationId = params['reservationId'];

      this.route.queryParams.subscribe(params => {
        const message: string = params['errorMessage'];
        this.isError = this.reservationId == '-1';
        this.errorMessage = message;
      });
    });
  }

}
