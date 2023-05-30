import { Injectable } from '@angular/core';
import { IScreening } from '../models/IScreening';
import { Observable, of } from 'rxjs';
import { Screening } from '../models/Screening';
import { MovieData } from '../models/MovieData';
import { Cinema, ICinema } from '../models/Cinema';

export class MovieWithScreening implements MovieData {
  id: number;
  imageUrl: string;
  title: string;
  date: Date;
  durationMinutes: number;
  age: string;
  details: string[];
  rating?: number | undefined;
  description: string;

  screenings: IScreening[] = [];

  constructor(movieData: MovieData, screenings: IScreening[]) {
    this.id = movieData.id;
    this.imageUrl = movieData.imageUrl;
    this.title = movieData.title;
    this.date = movieData.date;
    this.durationMinutes = movieData.durationMinutes;
    this.age = movieData.age;
    this.details = movieData.details;
    this.rating = movieData.rating;
    this.description = movieData.description;

    this.screenings = screenings;

  }
}

interface ICinemaService {
  getAllScreenings(cinemaId: number): Observable<IScreening[]>;
  getMoviesWithTheirScreenings(cinemaId: number): Observable<MovieWithScreening[]>;
  getCinemas(): Observable<ICinema[]>;

}

@Injectable({
  providedIn: 'root'
})
export class CinemaServiceService implements ICinemaService {

  private _selectedCinema?: ICinema;

  constructor() { }

  setCinema(cinema: ICinema): void {
    console.log("Cinema has been set!");
    this._selectedCinema = cinema;
  }

  get isCinemaSet(): boolean {
    return this._selectedCinema ? true : false;
  }

  getSelectedCinema(): ICinema | undefined {
    if (!this._selectedCinema) {
      //TODO load from local storage
    }

    return this._selectedCinema; //present or loaded or still undefined
  }

  getCinemas(): Observable<ICinema[]> {
    return this.getCinemasMock();
  }

  getCinemasMock(): Observable<ICinema[]> {
    const cinemas = [
      new Cinema(0, "Wrocław", "Wroclawia"),
      new Cinema(0, "Wrocław", "Pasaż grunwaldzki"),
      new Cinema(0, "Warszawa", "Złote tarasy"),
    ]
    return of(cinemas)
  }

  getAllScreenings(cinemaId: number): Observable<IScreening[]> {
    return this.getAllScreeningsMock(cinemaId);
  }
  getMoviesWithTheirScreenings(cinemaId: number): Observable<MovieWithScreening[]> {
    return this.getMoviesWithTheirScreeningsMock(cinemaId)
  }

  private getAllScreeningsMock(cinemaId: number): Observable<IScreening[]> {
    let screenings = [
      new Screening(0, new Date(), true, cinemaId, 0),
      new Screening(1, new Date(), false, cinemaId, 0),
      new Screening(2, new Date(), false, cinemaId, 0),
      new Screening(3, new Date(), true, cinemaId, 1),
      new Screening(4, new Date(), false, cinemaId, 1),
      new Screening(5, new Date(), false, cinemaId, 1),
      new Screening(6, new Date(), true, cinemaId, 2),
      new Screening(7, new Date(), false, cinemaId, 2),
      new Screening(8, new Date(), false, cinemaId, 2),
    ];

    return of(screenings);
  }

  private getMoviesMock(cinemaId: number): MovieData[] {
    let starWars0: MovieData = {
      id: 0,
      imageUrl: 'https://via.placeholder.com/150x200',
      title: 'GWIEZDNE WOJNY: CZĘŚĆ IV',
      date: new Date(1980, 4, 17),
      durationMinutes: 120,
      age: '7+',
      details: ['sci-fi', 'adventure'],
      rating: 9.7,
      description: 'UWAGA: Film jest wyświetlany w wersji oryginalnej bez polskich napisów. Imperator rozkazuje swojemu uczniowi Darthowi Vaderowi odnalezienie Luke\'a Skywalkera, by zmusić go do przejścia na ciemną stronę Mocy.',
    };

    let starWars1: MovieData = {
      id: 1,
      imageUrl: 'https://via.placeholder.com/150x200',
      title: 'GWIEZDNE WOJNY: CZĘŚĆ V - IMPERIUM KONTRATAKUJE (WERSJA ORYGINALNA)',
      date: new Date(1980, 4, 17),
      durationMinutes: 120,
      age: '7+',
      details: ['sci-fi', 'adventure'],
      rating: 9.7,
      description: 'UWAGA: Film jest wyświetlany w wersji oryginalnej bez polskich napisów. Imperator rozkazuje swojemu uczniowi Darthowi Vaderowi odnalezienie Luke\'a Skywalkera, by zmusić go do przejścia na ciemną stronę Mocy.',
    };

    let starWars2: MovieData = {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150x200',
      title: 'GWIEZDNE WOJNY: CZĘŚĆ VI',
      date: new Date(1980, 4, 17),
      durationMinutes: 120,
      age: '7+',
      details: ['sci-fi', 'adventure'],
      rating: 9.7,
      description: 'UWAGA: Film jest wyświetlany w wersji oryginalnej bez polskich napisów. Imperator rozkazuje swojemu uczniowi Darthowi Vaderowi odnalezienie Luke\'a Skywalkera, by zmusić go do przejścia na ciemną stronę Mocy.',
    };

    return [starWars0, starWars1, starWars2];
  }

  private getMoviesWithTheirScreeningsMock(cinemaId: number): Observable<MovieWithScreening[]> {

    let movies: MovieData[] = this.getMoviesMock(cinemaId)

    let moviesWithScreenings: MovieWithScreening[] = [];
    movies.forEach(element => {
      let screenings = [
        new Screening(3*element.id, new Date(), true, cinemaId, element.id),
        new Screening(3*element.id + 1, new Date(), false, cinemaId, element.id),
        new Screening(3*element.id + 2, new Date(), false, cinemaId, element.id),
      ];
      moviesWithScreenings.push(new MovieWithScreening(element, screenings))
    });

    return of(moviesWithScreenings);
  }

}
