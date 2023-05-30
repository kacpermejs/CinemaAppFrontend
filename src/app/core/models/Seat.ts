import { ISeat } from "./ISeat";
import { Location } from "./Location";


export class Seat implements ISeat {

  occupied: boolean;
  location: Location;

  constructor(occupied: boolean, row: number, column: number) {
    this.occupied = occupied;
    this.location = {row: row, column: column}
  }
}
