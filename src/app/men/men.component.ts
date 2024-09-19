import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  products = [
    'assets/images/m2/m2 (1).jfif',
    'assets/images/m2/m2 (2).jfif',
    'assets/images/m2/m2 (3).jfif',
    'assets/images/m2/m2 (4).jfif',
    'assets/images/m2/m2 (5).jfif',
    'assets/images/m2/m2 (6).jfif',
    'assets/images/m2/m2 (7).jfif',
    'assets/images/m2/m2 (8).jfif'
  ];

  constructor(private router: Router) {}

  viewProduct(image: string) {
    this.router.navigate(['/product-detail'], { queryParams: { image } });
  }
}
