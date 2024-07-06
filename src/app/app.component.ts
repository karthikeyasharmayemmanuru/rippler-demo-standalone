import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rippler-demo';
  products = [
    {
      image: 'assets/Image-Master.png',
      name: 'Burberry Flowy Dress',
      size: 'Size 4',
      price: '£12.00 Rental',
    },
    {
      image: 'assets/Image-Master-2.png',
      name: 'Prada Beach dress',
      size: 'Size 8',
      price: '£12.00 Rental',
    },
    {
      image: 'assets/Image-Master-1.png',
      name: 'Bhandage Red dress',
      size: 'Size 12',
      price: '£12.00 Rental',
    },
    {
      image: 'assets/Image-Master-3.png',
      name: 'Prada Wedding guest',
      size: 'Size 12',
      price: '£12.00 Rental',
    },
    {
      image: 'assets/Image-Master-4.png',
      name: 'Ansell Nightwear',
      size: 'Size 14',
      price: '£12.00 Rental',
    },
    {
      image: 'assets/Image-Master-5.png',
      name: 'Desacada Summer dress',
      size: 'Size 8',
      price: '£12.00 Rental',
    },
  ];
}
