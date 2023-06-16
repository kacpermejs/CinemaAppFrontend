import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ICinema } from '../models/Cinema';
import { HttpClient } from '@angular/common/http';
import { publicApiBaseUrl } from '../cinema-service/cinema-service.service';

@Injectable({
  providedIn: 'root'
})
export class CinemaSelectionService {

  private _cinemaDataSubject = new BehaviorSubject<ICinema | undefined>(undefined);
  private _selectedCinema$: Observable<ICinema | undefined> = this._cinemaDataSubject.asObservable();

  cinemas: ICinema[] = [];

  constructor(private http: HttpClient) {
    this.getCinemas().subscribe(cinemas => {
      this.cinemas = cinemas;
      const savedId = this.selectedCinemaId;
      if (savedId) {
        const selectedCinema = this.cinemas.find(cinema => cinema.id === +savedId);
        if (selectedCinema) {
          this._cinemaDataSubject.next(selectedCinema);
        }
      }
    });
  }

  get selectedCinema$(): Observable<ICinema | undefined> {
    return this._selectedCinema$;
  }

  get selectedCinemaId(): string | null {
    return localStorage.getItem('selectedCinema');
  }

  setCinema(id: string): void {
    localStorage.setItem('selectedCinema', id);
    const cinema = this.cinemas.find(cinema => cinema.id === +id);
    this._cinemaDataSubject.next(cinema);
  }

  get isCinemaSet(): boolean {
    return this._cinemaDataSubject.value ? true : false;
  }

  getCinemas(): Observable<ICinema[]> {
    return this.http.get<any>(publicApiBaseUrl + "/cinemas").pipe(
      map(response => {
        return response.map((item: any) => {
          return {
            id: item.id,
            name: item.name,
            city: item.address.city
          } as ICinema;
        });
      })
    );
  }
}
