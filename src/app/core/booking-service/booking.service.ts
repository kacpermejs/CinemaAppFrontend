import { Injectable } from '@angular/core';
import { publicApiBaseUrl } from '../cinema-service/cinema-service.service';
import { Observable } from 'rxjs';
import { IReservation } from '../models/Reservation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiUrl = publicApiBaseUrl + '/create-reservation'

  constructor(private http: HttpClient) { }

  makeReservation(reservation: IReservation): Observable<any> {
    return this.http.post<any>(this.apiUrl, reservation);
  }

}
