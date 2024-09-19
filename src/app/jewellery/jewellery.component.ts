import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css']
})
export class JewelleryComponent {
  products = [
    'assets/images/jewellery/j (1).jpg',
    'assets/images/jewellery/j (2).jpg',
    'assets/images/jewellery/j (3).jpg',
    'assets/images/jewellery/j (4).jpg',
    'assets/images/jewellery/j (5).jpg',
    'assets/images/jewellery/j (6).jpg'
  ];

  constructor(private router: Router) {}

  viewProduct(image: string) {
    this.router.navigate(['/product-detail'], { queryParams: { image } });
  }
}
