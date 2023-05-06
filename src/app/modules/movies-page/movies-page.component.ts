import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
