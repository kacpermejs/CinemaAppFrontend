import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { CinemaSelectionService } from 'src/app/core/cinema-selection-service/cinema-selection.service';
import { CinemaServiceService, MovieWithScreening } from 'src/app/core/cinema-service/cinema-service.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent implements OnInit {

  // images = [
  //   { src: 'https://via.placeholder.com/300x300', alt: 'Image 1' },
  //   { src: 'https://via.placeholder.com/300x300', alt: 'Image 2' },
  //   { src: 'https://via.placeholder.com/300x300', alt: 'Image 3' },
  //   { src: 'https://via.placeholder.com/300x300', alt: 'Image 4' },
  //   { src: 'https://via.placeholder.com/300x300', alt: 'Image 5' },
  //   { src: 'https://via.placeholder.com/300x300', alt: 'Image 6' },
  // ];

  //movies: MatTableDataSource<any>; // Movies data source for the table
  pageSize = 10; // Selected page size
  totalItems = 0; // Total number of items
  currentPage = 0; // Current page index
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  movies: MovieWithScreening[] = [];

  // constructor(private cinemaService: CinemaServiceService) {
    //   this.movies = this.cinemaService.getMoviesWithTheirScreenings(1);
    // }

  selectedDate = new FormControl(new Date());
  minDate: Date;
  maxDate: Date;

  cinemaId?: number;

  constructor(
    private cinemaService: CinemaServiceService,
    private cinemaSelectionService: CinemaSelectionService
    ) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);

    //On selection changes - movies need to reload
    this.cinemaSelectionService.selectedCinema$.subscribe( newCinema => {
      this.cinemaId = newCinema?.id;
      this.loadMovies(this.selectedDate.value ? this.selectedDate.value : new Date());
    });

  }

  ngOnInit() {
  }

  // getMovies() {
  //   this.cinemaService.getPlayedMovies(this.currentPage, this.pageSize)
  //     .subscribe(response => {
  //       this.movies = new MatTableDataSource(response.results);
  //       this.totalItems = response.totalItems;
  //     });
  // }

  private loadMovies(date: Date) {
    console.log("CinemaId: " + this.cinemaId);
    if (this.cinemaId != undefined) {
      this.cinemaService.getMoviesWithTheirScreenings(this.cinemaId, date, 100, 0).subscribe(movies => this.movies = movies);
    }
    else
      console.log("No cinema");
  }

  onDateChanged() {
    console.log(this.selectedDate.value);
    if(this.selectedDate.value)
      this.loadMovies(this.selectedDate.value);
  }

}
