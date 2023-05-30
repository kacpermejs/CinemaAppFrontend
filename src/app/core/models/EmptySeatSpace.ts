import { Location } from "./Location";
import { ISeat } from "./ISeat";


export class EmptySeatSpace implements ISeat {
  occupied: boolean;
  location: Location;

  constructor() {
    this.occupied = true;
    this.location = { row: -1, column: -1 };
  }

}
