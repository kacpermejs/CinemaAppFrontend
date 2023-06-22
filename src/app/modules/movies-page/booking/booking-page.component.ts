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
import { ActivatedRoute, Router } from '@angular/router';
import { WheelchairSeat } from 'src/app/core/models/WheelchairSeat';
import { CinemaSelectionService } from 'src/app/core/cinema-selection-service/cinema-selection.service';
import { IReservation } from 'src/app/core/models/Reservation';
import { BookingService } from 'src/app/core/booking-service/booking.service';
import { MovieData } from 'src/app/core/models/MovieData';
import { parseScreenType } from '../movie-card/movie-card.component';




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
  movieAndScreeningData: any;

  @ViewChild('stepper') stepper?: MatStepper;

  emailFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    emailCtrl: ['', Validators.required],

  });

  constructor(private _formBuilder: FormBuilder,
              private _matStepperIntl: MatStepperIntl,
              private cinemaSelectionService: CinemaSelectionService,
              private cinemaService: CinemaServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private bookingService: BookingService) {


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

        this.cinemaService.getMovieAndScreeningDataWithId(this.screeningId!)
          .subscribe(e => {
            this.movieAndScreeningData = e
            console.log(e);
          })
      });

    });



  }

  getHour(): string {
    const date = new Date(this.movieAndScreeningData?.date);

    return String(date.getHours()).padStart(2, '0') + ":" + String(date.getMinutes()).padStart(2, '0');
  }

  getDayOfTheWeek(): string {
    const date = new Date(this.movieAndScreeningData?.date);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long'
    };

    // Get the day of the week in Polish
    const dayOfWeekPolish = date.toLocaleString('pl-PL', options);


    return dayOfWeekPolish || '';
  }

  getDate(): string {
    const date = new Date(this.movieAndScreeningData?.date);

    return date.toLocaleDateString('pl-PL') || '';
  }

  getScreenType() {
    const type = this.movieAndScreeningData?.film?.screenType;
    return parseScreenType(type);
  }

  getPrice(): number {
    return +this.movieAndScreeningData?.film?.price;
  }

  getSummedPrice(): number {
    return this.selectedIds.size * this.getPrice();
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
        this.cinemaSelectionService.isCinemaSet) { //valid
      //reservation post call
      this.makeReservation();

    } else { //invalid
      //show message and redirection to the beginning

    }

  }

  makeReservation() {
    console.log("Making Reservation")
    const programmeId = this.screeningId!;

    if (this.emailFormGroup.valid)
    {

      const reservation: IReservation = {
        contactData: {
          firstName: this.emailFormGroup.value.firstName!,
          lastName: this.emailFormGroup.value.lastName!,
          email: this.emailFormGroup.value.emailCtrl!,
          phoneNumber: this.emailFormGroup.value.phoneNumber!
        },
        programmeId: programmeId,
        reservedSeatsIds: Array.from(this.selectedIds)
      }

      console.log(reservation);
      this.bookingService.makeReservation(reservation).subscribe({
        next: res => {
          console.log(res)
          this.router.navigate(['/movies/booking/result', res.reservationId])

        },
        error: err => {
          console.error(err)
          const queryParams = {errorMessage: 'Coś poszło nie tak!'}
          this.router.navigate(['/movies/booking/result', -1], {queryParams})
        }
      })

    }
  }

}
