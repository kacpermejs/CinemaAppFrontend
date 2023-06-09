import { ISeat, SeatType } from "./ISeat";
import { Seat } from "./Seat";

export class WheelchairSeat extends Seat {
  constructor(seatData: ISeat) {
    super(seatData);
    this.type = SeatType.Wheelchair;
  }
}
