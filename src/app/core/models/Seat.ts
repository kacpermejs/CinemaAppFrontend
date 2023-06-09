import { ISeat, SeatType } from "./ISeat";
import { Location } from "./Location";

export class Seat implements ISeat {

  id: number;
  occupied: boolean;
  location: Location;
  layoutLocation: Location;
  section: string;
  type: SeatType;

  constructor(seatData: ISeat) {
    this.id = seatData.id;
    this.occupied = seatData.occupied;
    this.section = seatData.section;
    this.location = seatData.location
    this.layoutLocation = seatData.layoutLocation;
    this.type = SeatType.Regular;
  }
}
