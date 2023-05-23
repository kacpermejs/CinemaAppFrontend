import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingPageComponent } from '../booking/booking-page.component';
import { MovieData } from '../../../core/models/MovieData';
import { IScreening } from '../../../core/models/IScreening';
import { Screening } from '../../../core/models/Screening';


export interface MovieCardData {
  image: string;
  title: string
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movieData?: MovieData;
  @Input() screenings: IScreening[] = [];

  // data: MovieData = {
  //   id: 1,
  //   imageUrl: 'https://via.placeholder.com/150x200',
  //   title: 'GWIEZDNE WOJNY: CZĘŚĆ V - IMPERIUM KONTRATAKUJE (WERSJA ORYGINALNA)',
  //   date: new Date(1980, 4, 17),
  //   durationMinutes: 120,
  //   age: '7+',
  //   details: ['sci-fi', 'adventure'],
  //   rating: 9.7,
  //   description: 'UWAGA: Film jest wyświetlany w wersji oryginalnej bez polskich napisów. Imperator rozkazuje swojemu uczniowi Darthowi Vaderowi odnalezienie Luke\'a Skywalkera, by zmusić go do przejścia na ciemną stronę Mocy.',
  // };

  constructor() {}

  ngOnInit() {

  }

}
