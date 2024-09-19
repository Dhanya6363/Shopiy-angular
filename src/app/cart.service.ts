import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  image: string;
  price: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  cartItemCount$ = this.cartItemCount.asObservable();

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cartItemCount.next(this.cartItems.length);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }
}
