
export interface IScreening {
  id: number;
  date: Date;
  available: boolean;
  movieId: number;
  cinemaId: number;
  hallId: number;
  languageType: string;
  screenType: string;
  price: number;
}
