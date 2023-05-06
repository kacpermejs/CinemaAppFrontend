import { Component, OnInit } from '@angular/core';


export interface MovieCardData {
  image: string;
  title: string
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface MovieData {
  imageUrl: string;
  title: string;
  date: Date;
  durationMinutes: number;
  age: string;
  details: string[];
  rating?: number;
  description: string;
}

export interface IScreening {
  date: Date;
  hour: string;
  minute: string;
  available: boolean;
}

class Screening implements IScreening {
  date: Date;
  available: boolean;

  constructor(date: Date, available: boolean) {
    this.date = date;
    this.available = available;
  }
  get hour(): string {
    return this.date.getHours().toString();
  }
  get minute(): string {
    return this.date.getMinutes().toString();
  }
}

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  data: MovieData = {
    imageUrl: 'https://via.placeholder.com/150x200',
    title: 'GWIEZDNE WOJNY: CZĘŚĆ V - IMPERIUM KONTRATAKUJE (WERSJA ORYGINALNA)',
    date: new Date(1980, 4, 17),
    durationMinutes: 120,
    age: '7+',
    details: ['sci-fi', 'adventure'],
    rating: 9.7,
    description: 'UWAGA: Film jest wyświetlany w wersji oryginalnej bez polskich napisów. Imperator rozkazuje swojemu uczniowi Darthowi Vaderowi odnalezienie Luke\'a Skywalkera, by zmusić go do przejścia na ciemną stronę Mocy.',
  };

  screenings: IScreening[] =
  [
    new Screening(new Date(), true),
    new Screening(new Date(), false),
    new Screening(new Date(), false),
  ];

  constructor() { }

  ngOnInit() {
  }

}
