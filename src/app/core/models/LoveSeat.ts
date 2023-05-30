import { Location } from "./Location";
import { Seat } from "./Seat";


export class LoveSeat extends Seat {

  connected: Location;

  constructor(occupied: boolean, row: number, column: number, connected: Location) {
    super(occupied, row, column);
    this.connected = connected;
  }

  get isLeft(): boolean {
    return this.connected.column > this.location.column
  }

  get isRight(): boolean {
    return !this.isLeft
  }

}
