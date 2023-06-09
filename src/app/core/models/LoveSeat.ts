import { ISeat, SeatType } from "./ISeat";
import { Location } from "./Location";
import { Seat } from "./Seat";


export class LoveSeat extends Seat {

  connected: Location;

  constructor(seatData: ISeat, connected: Location) {
    super(seatData);
    this.connected = connected;
    this.type = SeatType.LoveSeat;
  }

  get isLeft(): boolean {
    //console.log("con: " + this.connected.column + " > loc: " + this.location.column + " res: " + (this.connected.column > this.location.column));
    return this.connected.column > this.location.column
  }

  get isRight(): boolean {
    return !this.isLeft
  }

}
