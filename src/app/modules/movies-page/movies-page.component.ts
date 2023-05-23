import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CinemaServiceService, MovieWithScreening } from 'src/app/core/cinema-service/cinema-service.service';

interface PlayedMovie {

}

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {

  images = [
    { src: 'https://via.placeholder.com/300x300', alt: 'Image 1' },
    { src: 'https://via.placeholder.com/300x300', alt: 'Image 2' },
    { src: 'https://via.placeholder.com/300x300', alt: 'Image 3' },
    { src: 'https://via.placeholder.com/300x300', alt: 'Image 4' },
    { src: 'https://via.placeholder.com/300x300', alt: 'Image 5' },
    { src: 'https://via.placeholder.com/300x300', alt: 'Image 6' },
  ];

  movies: Observable<MovieWithScreening[]>;

  constructor(private cinemaService: CinemaServiceService) {
    this.movies = this.cinemaService.getMoviesWithTheirScreenings(1);
  }

  ngOnInit() {
  }

}
