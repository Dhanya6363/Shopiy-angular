import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; // Adjust the import path based on your file structure

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemCount!: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Subscribe to the cart item count observable
    this.cartService.cartItemCount$.subscribe(count => this.cartItemCount = count);
  }
}

