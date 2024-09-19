import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  notificationImageArray: Array<{ notification: string, imageUrl: string,productId:string }> = [
    { notification: 'Better clothing for the planet', imageUrl: 'assets/images/m1.png',productId: '1' },
    { notification: 'Our latest arrivals', imageUrl: 'assets/images/m2.png',productId: '2' },
    { notification: 'Eco-friendly Materials', imageUrl: 'assets/images/m3.png',productId: '3' },
    { notification: 'Sustainable Fashion', imageUrl: 'assets/images/m4.png',productId: '4' }
    // Add more notification-image pairs as needed
  ];

  currentIndex: number = 0;
dots: any[] = []; // Array to represent dots, should match the number of slides

ngOnInit() {
  this.dots = new Array(this.notificationImageArray.length);
}

previousSlide() {
  this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.notificationImageArray.length - 1;
}

nextSlide() {
  this.currentIndex = (this.currentIndex < this.notificationImageArray.length - 1) ? this.currentIndex + 1 : 0;
}

setCurrentIndex(index: number) {
  this.currentIndex = index;
}

}
