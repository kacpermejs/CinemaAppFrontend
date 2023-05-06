import { Component, OnInit } from '@angular/core';


interface MovieCardData {
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

  data: MovieCardData = {
    image: 'https://via.placeholder.com/150x200',
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    description: 'This is a card description. It can be quite long and wrap to multiple lines if necessary.',
    buttonText: 'Click me',
    buttonLink: 'https://example.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
