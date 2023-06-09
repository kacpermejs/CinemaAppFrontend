import { Component, OnInit, ViewChild } from '@angular/core';
import { Seat } from 'src/app/core/models/Seat';
import { ISeat, SeatType } from 'src/app/core/models/ISeat';
import { LoveSeat } from 'src/app/core/models/LoveSeat';
import { EmptySeatSpace } from 'src/app/core/models/EmptySeatSpace';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper, MatStepperIntl } from '@angular/material/stepper';
import { CinemaServiceService, HallData } from 'src/app/core/cinema-service/cinema-service.service';
import { Observable, filter, flatMap, map, of, switchMap, tap, toArray } from 'rxjs';
import { Location } from "src/app/core/models/Location";
import { ActivatedRoute } from '@angular/router';
import { WheelchairSeat } from 'src/app/core/models/WheelchairSeat';




@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {

  selectedIds = new Set<number>();

  hall?: HallData;
  seatsArray: ISeat[][] = [];

  movieId?: number;
  screeningId?: number;

  @ViewChild('stepper') stepper?: MatStepper;

  emailFormGroup = this._formBuilder.group({
    emailCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,
              private _matStepperIntl: MatStepperIntl,
              private cinemaService: CinemaServiceService,
              private route: ActivatedRoute) {


  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.screeningId = +params['screeningId'];
      this.movieId = +params['movieId'];

      this.cinemaService.getHallData(this.screeningId).subscribe( hall => {
        console.log(hall);
        this.hall = hall;

        const seatsArray: ISeat[][] = Array.from(
          { length: hall.rows + 1 },
          () => Array(hall.columns + 1)
        );
        // Map the seats data to the 2D array
        for (let seat of hall.seats) {
          seatsArray[seat.layoutLocation.row][seat.layoutLocation.column] = seat;
        }
        this.seatsArray = seatsArray;
      });

    });



  }

  get selectedSeats(): ISeat[] {
    const selected: ISeat[] = [];
    if(this.hall?.seats) {
      for(let seat of this.hall?.seats) {
        if (this.isSelected(seat)) {
          selected.push(seat);
        }
      }
    }
    return selected;
  }

  isRegularSeat(seat: ISeat): boolean {
    return seat.type == SeatType.Regular;
  }

  isWheelchair(seat: ISeat): boolean {
    return seat instanceof WheelchairSeat;
  }

  isLoveSeat(seat: ISeat): boolean {
    return seat instanceof LoveSeat;
  }

  isLoveSeatLeft(seat: ISeat): boolean {
    return (seat as LoveSeat).isLeft;
  }

  isSelected(seat: ISeat): boolean {
    return this.selectedIds.has(seat.id);
  }

  isEmptySpace(elem: any) {
    return !(elem ? true : false);
  }

  select(seat: ISeat) {
    if (!this.isSelected(seat) && !seat.occupied) {
      this.selectedIds.add(seat.id);
    }
  }

  deselect(seat: ISeat): boolean {
    return this.selectedIds.delete(seat.id);
  }

  getRowNum(row: ISeat[]): number | undefined {
    return row.find(seat => seat)?.location.row;
  }

  findSeatByLocationAndSection(location: Location, section: string): ISeat | undefined {

    for (const seat of this.hall?.seats!) {
      // Check if the seat matches the provided location and section
      if (seat && seat.location.row === location.row && seat.location.column === location.column && seat.section === section) {
        return seat; // Return the matched seat
      }
    }
    return undefined;
  }

  seatOnClick(seat: ISeat) {
    if (this.isSelected(seat)) {
      if (seat instanceof LoveSeat) {
        if(seat.connected.column > seat.location.column) {
          this.deselect(seat)
          const found = this.findSeatByLocationAndSection(seat.connected, seat.section);
          found ? this.deselect(found) : console.log("Seat not found");
        } else {
          const found = this.findSeatByLocationAndSection(seat.connected, seat.section);
          found ? this.deselect(found) : console.log("Seat not found");
          this.deselect(seat)
        }
      } else {
        this.deselect(seat)
      }
    } else {
      if (seat instanceof LoveSeat) {
        if(seat.connected.column > seat.location.column) {
          this.select(seat)
          const found = this.findSeatByLocationAndSection(seat.connected, seat.section);
          found ? this.select(found) : console.log("Seat not found");
        } else {
          const found = this.findSeatByLocationAndSection(seat.connected, seat.section);
          found ? this.select(found) : console.log("Seat not found");
          this.select(seat)
        }
      } else {
        this.select(seat)
      }
    }
  }

  checkSeatSelection(): boolean {
    return this.selectedIds.size > 0
  }

  isStepperValid(): boolean {
    return this.emailFormGroup.valid &&
           this.checkSeatSelection();
  }

  submit() {
    //check validity
    if (this.emailFormGroup.valid &&
        this.checkSeatSelection() &&
        this.cinemaService.isCinemaSet) { //valid
      //reservation post call
      this.makeReservation();

    } else { //invalid
      //show message and redirection to the beginning

    }

  }

  makeReservation() {
    console.log("Making Reservation")
    const cinema = this.cinemaService.getSelectedCinema();
  }

}
