import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  products = [
    'assets/images/m3/m3 (1).jpg',
    'assets/images/m3/m3 (2).jpg',
    'assets/images/m3/m3 (3).jpg',
    'assets/images/m3/m3 (4).jpg',
    'assets/images/m3/m3 (5).jpg',
    'assets/images/m3/m3 (6).jpg',
    'assets/images/m3/m3 (7).jpg',
    'assets/images/m3/m3 (8).jpg'
  ];

  constructor(private router: Router) {}

  viewProduct(image: string) {
    this.router.navigate(['/product-detail'], { queryParams: { image } });
  }
}
