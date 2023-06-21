import { Injectable } from '@angular/core';
import { IScreening } from '../models/IScreening';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Screening } from '../models/Screening';
import { MovieData } from '../models/MovieData';
import { Cinema, ICinema } from '../models/Cinema';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ISeat, SeatType } from '../models/ISeat';
import { Location } from '../models/Location';
import { Seat } from '../models/Seat';
import { EmptySeatSpace } from '../models/EmptySeatSpace';
import { WheelchairSeat } from '../models/WheelchairSeat';
import { LoveSeat } from '../models/LoveSeat';

export const publicApiBaseUrl = "/api/public"

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

export interface HallData {
  id: number;

  columns: number;
  rows: number;

  seats: ISeat[];
}

function mapSeatType(inputType: any): SeatType {

  switch(inputType) {
    case "REGULAR":
      return SeatType.Regular;
    case "DOUBLE":
      return SeatType.LoveSeat;
    case "DISABLED":
      return SeatType.Wheelchair;
    default:
      return SeatType.Empty;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CinemaServiceService {



  constructor(private http: HttpClient) {

  }

  getHallData(screeningId: number): Observable<HallData> {
    const hallData = this.http.get<any>(publicApiBaseUrl + "/all-seats-for?id=" + screeningId).pipe(
      map((response: any) => {
        const seatsWithOccupancy = response.seats.map((seatData: any) => {
          const mappedSeat: ISeat = {
            id: seatData.seat.id,
            occupied: seatData.isOccupied,
            location: {row: seatData.seat.row, column: seatData.seat.column},
            layoutLocation: {row: seatData.seat.layoutRow, column: seatData.seat.layoutColumn},
            section: seatData.seat.seatSection,
            type: mapSeatType(seatData.seat.seatType)
          };
          //console.log(mappedSeat);

          switch(mapSeatType(seatData.seat.seatType)) {
            case SeatType.Regular:
              return new Seat(mappedSeat);
            case SeatType.Wheelchair:
              return new WheelchairSeat(mappedSeat);
            case SeatType.LoveSeat:
              return new LoveSeat(mappedSeat, {row: seatData.seat.additionRow, column: seatData.seat.additionColumn});
            case SeatType.Empty:
              return new EmptySeatSpace(mappedSeat.layoutLocation.row, mappedSeat.layoutLocation.column);
            default:
              return new EmptySeatSpace(mappedSeat.layoutLocation.row, mappedSeat.layoutLocation.column);
          }

        }) as ISeat[];

        // "additionSeatColumn": 7,
        // "additionSeatRow": 8,
        // "additionColumn": 7,
        // "additionRow": 9

        return {
          id: response.id,
          columns: seatsWithOccupancy.reduce((a, b) => Math.max(a, b.layoutLocation.column), 0),
          rows: seatsWithOccupancy.reduce((a, b) => Math.max(a, b.layoutLocation.row), 0),
          seats: seatsWithOccupancy
        } as HallData;
      })
    );
    return hallData;
  }

  getCinemasMock(): Observable<ICinema[]> {
    const cinemas = [
      new Cinema(0, "Wrocław", "Wroclawia"),
      new Cinema(1, "Wrocław", "Pasaż grunwaldzki"),
      new Cinema(2, "Warszawa", "Złote tarasy"),
    ]
    return of(cinemas)
  }

  getAllScreenings(cinemaId: number): Observable<IScreening[]> {
    return this.getAllScreeningsMock(cinemaId);
  }

  getPlayedMovies(cinemaId: number, date: Date ): Observable<any> {
    const params = new HttpParams()
      .set('page', '0')
      .set('size', '10')
      .set('cinemaId', cinemaId.toString())
      .set('date', date.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }) );

    return this.http.get<any>(publicApiBaseUrl + '/programme', {params} )
  }

  getMoviesWithTheirScreenings(cinemaId: number, date: Date, pageSize: number, pageNum: number): Observable<MovieWithScreening[]> {
    //return this.getMoviesWithTheirScreeningsMock(cinemaId)
    console.log(parseDateToString(date))

    const params = new HttpParams()
      .set('page', pageNum.toString())
      .set('size', pageSize.toString())
      .set('cinemaId', cinemaId.toString())
      .set('date', date.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }) );

    return this.http.get<any>(publicApiBaseUrl + '/programme', {params}).pipe(
      map((response: any) => {
        const screeningsByMovie = [];

        // Group screenings by movie ID
        for (const screening of response.content) {
          const movieId = screening.film.id;
          const movieIndex = screeningsByMovie.findIndex(movie => movie.id === movieId);
          if (movieIndex !== -1) {
            screeningsByMovie[movieIndex].screenings.push(screening);
          } else {
            const movieData = {
              id: screening.film.id,
              imageUrl: screening.film.poster,
              title: screening.film.name,
              date: new Date(screening.film.premiereDate),
              durationMinutes: getDurationMinutes(screening.film.duration),
              age: screening.film.ageLimit,
              details: [screening.film.director, screening.film.cast],
              description: screening.film.description,
              screenings: [screening]
            };
            screeningsByMovie.push(movieData);
          }
        }

        // Map variable names
        const mappedScreenings = screeningsByMovie.map(movie => ({
          id: movie.id,
          imageUrl: movie.imageUrl,
          title: movie.title,
          date: movie.date,
          durationMinutes: movie.durationMinutes,
          age: movie.age,
          details: movie.details,
          description: movie.description,
          screenings: movie.screenings.map(screening => ({
            id: screening.id,
            date: new Date(screening.date),
            available: true,//TODO
            movieId: movie.id,
          } as IScreening ))
        }));

        return mappedScreenings;
      })
    );
  }

  getMovieAndScreeningDataWithId(id: number): Observable<any> {
    const result = this.http.get<any>(publicApiBaseUrl + '/programme/single?id=' + id)

    return result;
  }

  private getAllScreeningsMock(cinemaId: number): Observable<IScreening[]> {
    let screenings = [
      new Screening(0, new Date(), true, cinemaId, 0, 0),
      new Screening(1, new Date(), false, cinemaId, 0, 1),
      new Screening(2, new Date(), false, cinemaId, 0, 2),
      new Screening(3, new Date(), true, cinemaId, 1, 3),
      new Screening(4, new Date(), false, cinemaId, 1, 4),
      new Screening(5, new Date(), false, cinemaId, 1, 5),
      new Screening(6, new Date(), true, cinemaId, 2, 6),
      new Screening(7, new Date(), false, cinemaId, 2, 7),
      new Screening(8, new Date(), false, cinemaId, 2, 8),
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
        new Screening(3*element.id, new Date(), true, cinemaId, element.id, 3*element.id),
        new Screening(3*element.id + 1, new Date(), false, cinemaId, element.id, 3*element.id + 1),
        new Screening(3*element.id + 2, new Date(), false, cinemaId, element.id, 3*element.id + 2),
      ];
      moviesWithScreenings.push(new MovieWithScreening(element, screenings))
    });

    return of(moviesWithScreenings);
  }

}

function getDurationMinutes(duration: string): number {
  // Convert duration string to minutes
  const [hours, minutes] = duration.split(':');
  const hoursInMinutes = parseInt(hours, 10) * 60;
  const minutesInt = parseInt(minutes, 10);
  return hoursInMinutes + minutesInt;
}

export function parseDateToString(date: Date) {
  return date.getFullYear() + '-' +
         String(date.getMonth()+1).padStart(2, '0') + '-' +
         String(date.getDate()).padStart(2, '0')
}
