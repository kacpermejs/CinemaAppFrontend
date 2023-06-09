import { ISeat, SeatType } from "./ISeat";
import { Location } from "./Location";
import { Seat } from "./Seat";


export class EmptySeatSpace extends Seat {

  constructor(layoutRow: number, layoutColumn: number) {
    super({
      occupied: true,
      section: "X",
      location: {row: -1, column: -1},
      layoutLocation: {row: layoutRow, column: layoutColumn}
    } as ISeat);
    this.type = SeatType.Empty;
  }

}
