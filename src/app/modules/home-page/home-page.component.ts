import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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
