import { Location } from "./Location";

export enum SeatType {
  Regular,
  Wheelchair,
  LoveSeat,
  Empty
}

export interface ISeat {
  id: number;
  occupied: boolean;
  location: Location;
  layoutLocation: Location;
  section: string;
  type: SeatType;
}


