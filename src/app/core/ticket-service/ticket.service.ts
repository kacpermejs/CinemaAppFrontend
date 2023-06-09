import { Injectable } from '@angular/core';
import { IScreening } from '../models/IScreening';
import { ISeat } from '../models/ISeat';
import { Observable, of } from 'rxjs';

export interface ITicket {
  id: number;
  screeningId: number;
  seats: ISeat[];
}

export class Ticket implements ITicket {
  id: number;
  screeningId: number;
  seats: ISeat[];

  constructor(id: number, screeningId: number, seats: ISeat[]) {
    this.id = id
    this.screeningId = screeningId;
    this.seats = seats;
  }

}


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private _mockTickets: ITicket[];

  constructor() {

    this._mockTickets = [

    ]
  }

  getTicket(id: number): Observable<ITicket> {
    return this.getTicketMock(id);
  }

  getTicketMock(id: number): Observable<ITicket> {
    return of();
  }

}
