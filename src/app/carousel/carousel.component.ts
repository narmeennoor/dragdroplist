
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    { url: './assets/image1.jpg', alt: 'Image 1' },
    { url: 'assets/image2.jpg', alt: 'Image 2' },
    { url: 'assets/image3.jpg', alt: 'Image 3' },
    { url: 'assets/image4.jpeg', alt: 'Image 4' },
    
  ];

  currentImageIndex = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.images); 
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  previousImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  setCurrentImage(index: number): void {
    this.currentImageIndex = index;
  }
}