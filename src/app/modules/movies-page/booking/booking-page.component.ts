import { Component, OnInit, ViewChild } from '@angular/core';
import { Seat } from 'src/app/core/models/Seat';
import { ISeat } from 'src/app/core/models/ISeat';
import { LoveSeat } from 'src/app/core/models/LoveSeat';
import { EmptySeatSpace } from 'src/app/core/models/EmptySeatSpace';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper, MatStepperIntl } from '@angular/material/stepper';
import { CinemaServiceService } from 'src/app/core/cinema-service/cinema-service.service';



@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {

  seats: ISeat[][] = [];
  rows = 6;
  columns = 12;

  selected = new Set<ISeat>()

  @ViewChild('stepper') stepper?: MatStepper;
  emailFormGroup = this._formBuilder.group({
    emailCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,
              private _matStepperIntl: MatStepperIntl,
              private cinemaService: CinemaServiceService) {
    for (let r = 0; r < 5; r++) {
      this.seats.push([]);
      for (let c = 0; c < 12; c++) {
        if( c == 2 || c == 9)
          this.seats[r].push(new EmptySeatSpace())
        else {
          if (c<2)
            this.seats[r].push(new Seat(Math.random() >= 0.5, r, c))
          else if (c>9)
            this.seats[r].push(new Seat(Math.random() >= 0.5, r, c-2))
          else
            this.seats[r].push(new Seat(Math.random() >= 0.5, r, c-1))
        }
          }
    }
    //empty row
    this.seats.push([]);
    for (let c = 0; c < 12; c++) {
      this.seats[5].push(new EmptySeatSpace())
    }
    //love seats
    this.seats.push([]);
    for (let c = 0; c < 12; c++) {
      if ( (c+1)%2 == 1 )
        this.seats[6].push(new LoveSeat(Math.random() >= 0.5, 5, c, {row: 5, column: c + 1}))//next
      else
        this.seats[6].push(new LoveSeat(this.seats[6][c-1].occupied, 5, c, {row: 5, column: c-1 }))//previous
    }

    console.log(this.seats);

  }

  ngOnInit() {
  }

  isLoveSeat(seat: ISeat): boolean {
    return seat instanceof LoveSeat;
  }

  isLoveSeatLeft(seat: ISeat): boolean {
    return (seat as LoveSeat).isLeft;
  }

  isSelected(seat: ISeat): boolean {
    return this.selected.has(seat);
  }

  isEmptySpace(seat: ISeat) {
    return seat instanceof EmptySeatSpace;
  }

  select(seat: ISeat) {
    if (!this.isSelected(seat) && !seat.occupied) {
      this.selected.add(seat);
    }
  }

  deselect(seat: ISeat) {
    if (this.isSelected(seat)) {
      this.selected.delete(seat);
    }
  }

  nextSeat(seat: ISeat): ISeat | undefined {
    let coords = this.findIndexes(seat)

    if(coords) {
      let row = coords?.[0];
      let nextCol = coords?.[1] + 1;

      return this.seats[row][nextCol];
    } else { return undefined; }
  }

  previousSeat(seat: Seat): ISeat | undefined {
    let coords = this.findIndexes(seat)

    if(coords) {
      let row = coords?.[0];
      let nextCol = coords?.[1] - 1;

      return this.seats[row][nextCol];
    } else { return undefined; }
  }

  findIndexes(seat: ISeat): [x: number, y: number] | undefined {
    const foundItem = this.seats.find(row => row.includes(seat));

    if (foundItem) {
      const rowIndex = this.seats.findIndex(row => row === foundItem);
      const columnIndex = foundItem.findIndex(item => item === seat);

      return [rowIndex, columnIndex]
    } else {
      return undefined;
    }
  }

  seatOnClick(seat: ISeat) {

    if (this.isSelected(seat)) {
      if (seat instanceof LoveSeat) {
        if(seat.connected.column == seat.location.column + 1) {
          this.deselect(seat)
          this.deselect(this.nextSeat(seat)!)
        } else {
          this.deselect(this.previousSeat(seat)!)
          this.deselect(seat)
        }
      } else {
        this.deselect(seat)
      }
    } else {
      if (seat instanceof LoveSeat) {
        if(seat.connected.column == seat.location.column + 1) {
          this.select(seat)
          this.select(this.nextSeat(seat)!)
        } else {
          this.select(this.previousSeat(seat)!)
          this.select(seat)
        }
      } else {
        this.select(seat)
      }
    }
  }

  checkSeatSelection(): boolean {
    return this.selected.size > 0
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
