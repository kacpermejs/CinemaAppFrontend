import { Location } from "./Location";
import { Seat } from "./Seat";


export class LoveSeat extends Seat {

  connected: Location[];

  constructor(occupied: boolean, row: string, column: string, connected: Location[]) {
    super(occupied, row, column);
    this.connected = connected;
  }
}
