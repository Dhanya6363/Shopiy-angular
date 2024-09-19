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
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productId?: string;
  productDetails?: Product;
  quantity: number = 1;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('productId') ?? undefined;
      if (this.productId) {
        // You would fetch the product details from a service or directly use a mock product list.
        this.productDetails = this.getProductById(this.productId);
      }
    });
  }

  getProductById(id: string): Product | undefined {
    // This is a placeholder for fetching product details.
    // Replace with actual service call.
    const products: Product[] = [
      {
        id: 'Women Blouses',
        title: 'Women Blouses',
        description: 'Take comfort to a whole new level with our edit of girls\' jeans...',
        images: ['assets/images/m4/m4(1).jfif', 'assets/images/m4/m4(2).jfif'],
        price: 'Rs.1,799.00',
        sizes: ['9-10Y', '10-11Y', '11-12Y', '12-13Y', '13-14Y']
      },
      // Add more products as needed
    ];
    return products.find(product => product.id === id);
  }

   addToCart(): void {
  //   if (this.productDetails) {
  //     this.cartService.addToCart({ ...this.productDetails, quantity: this.quantity });
  //   }
  }
}
