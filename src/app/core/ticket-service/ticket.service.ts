import { Injectable } from '@angular/core';
import { IScreening } from '../models/IScreening';
import { ISeat } from '../models/ISeat';
import { Observable, map, of, tap } from 'rxjs';
import { IReservation } from '../models/Reservation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth-service/auth.service';


export interface TicketDTO extends IReservation {
  dateTime: string;
  film: string;
  hallName: string;
  numberOfSeats: number;
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  baseUrl = '/api/usher'

  constructor(private http: HttpClient, private auth: AuthService) {

  }

  getTicket(id: number): Observable<TicketDTO> {

    const headers = this.getHeaders()

    return this.http.get<TicketDTO>(this.baseUrl + '/check-ticket?forId=' + id, {headers: headers});
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getToken()}`
    });
    return headers;
  }

}
