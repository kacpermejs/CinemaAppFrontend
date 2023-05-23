import { IScreening } from './IScreening';

export class Screening implements IScreening {
  id: number;
  date: Date;
  available: boolean;
  movieId: number;
  cinemaId: number;

  constructor(id: number, date: Date, available: boolean, cinemaId: number, movieId: number) {
    this.id = id;
    this.date = date;
    this.available = available;
    this.cinemaId = cinemaId;
    this.movieId = movieId;
  }
  get hour(): string {
    return this.date.getHours().toString();
  }
  get minute(): string {
    return this.date.getMinutes().toString();
  }
}
