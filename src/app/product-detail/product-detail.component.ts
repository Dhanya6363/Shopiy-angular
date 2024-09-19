import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  price = '$100'; // Example price
  cartItemCount = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.product = params['image'];
    });

    this.cartService.cartItemCount$.subscribe(count => this.cartItemCount = count);
  }

  addToCart() {
    this.cartService.addToCart({ image: this.product, price: this.price });
  }
}
