import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: string;
  sizes: string[];
  quantity?: number; // Make quantity optional
}

interface CartProduct extends Product {
  quantity: number; // Make quantity a required property
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  productId?: string;
  productDetails?: Product;
  quantity: number = 1;
  cartItems: any;
  cartItemCount: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('productId') ?? undefined;
      if (this.productId) {
        // Fetch or mock the product details
        this.productDetails = this.getProductById(this.productId);
      }
    });
  }

  getProductById(id: string): Product | undefined {
    // This is a placeholder. Replace with actual data fetching.
    const products: Product[] = [
      {
        id: 'Women Blouses',
        title: 'Women Blouses',
        description: 'Take comfort to a whole new level with our edit of girls\' jeans...',
        images: [
          'C:\Users\dhanyasr\AngularTrainings\shopify-angular\src\assets\images\m2\m2(1).jfif',
          'assets/images/m4/m4(2).jfif',
          'assets/images/m4/m4(3).jfif',
          'assets/images/m4/m4(4).jfif'
        ],
        price: 'Rs.1,799.00',
        sizes: ['9-10Y', '10-11Y', '11-12Y', '12-13Y', '13-14Y']
      },
      {
        id: 'Regular Fit Hybrid Jacket',
        title: 'Regular Fit Hybrid Jacket',
        description: 'Take comfort to a whole new level with our edit of girls\' jeans...',
        images: [
          'assets/images/m2/m2(1).jfif',
          'assets/images/m2/m2(2).jfif',
          'assets/images/m2/m2(3).jfif'
        ],
        price: 'Rs.1,799.00',
        sizes: ['9-10Y', '10-11Y', '11-12Y', '12-13Y', '13-14Y']
      },
      {
        id: 'KAFTHAN dress',
        title: 'KAFTHAN dress',
        description: 'Take comfort to a whole new level with our edit of girls\' jeans...',
        images: [
          'assets/images/m3/m3(1).jpg',
          'assets/images/m3/m3(2).jpg',
          'assets/images/m3/m3(3).jpg'
        ],
        price: 'Rs.1,799.00',
        sizes: ['9-10Y', '10-11Y', '11-12Y', '12-13Y', '13-14Y']
      },
      {
        id: 'Wide Leg Jeans',
        title: 'Wide Leg Jeans',
        description: 'Take comfort to a whole new level with our edit of girls\' jeans...',
        images: [
          'assets/images/m4/m4(1).jfif',
          'assets/images/m4/m4(2).jfif',
          'assets/images/m4/m4(3).jfif',
          'assets/images/m4/m4(4).jfif',
          'assets/images/m4/m4(5).jfif'
        ],
        price: 'Rs.1,799.00',
        sizes: ['9-10Y', '10-11Y', '11-12Y', '12-13Y', '13-14Y']
      }
    ];
    return products.find(product => product.id === id);
  }
  
  addToCart(): void {
    if (this.productDetails) {
      const cartProduct = { ...this.productDetails, quantity: this.quantity };
      //this.cartService.addToCart(cartProduct);
    }
  }
  
  
}
