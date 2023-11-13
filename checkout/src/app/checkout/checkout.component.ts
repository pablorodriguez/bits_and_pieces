import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  total: number = 0;
  totalItems: number = 0;
  products: Product[] = [
    {
      "name": "Laptop",
      "price": 999.99,
      "category": "Electronics"
    },
    {
      "name": "T-shirt",
      "price": 19.99,
      "category": "Apparel"
    },
    {
      "name": "Headphones",
      "price": 79.99,
      "category": "Electronics"
    },
    {
      "name": "Running Shoes",
      "price": 49.99,
      "category": "Footwear"
    },
    {
      "name": "Backpack",
      "price": 39.99,
      "category": "Accessories"
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
    this.products.forEach(product => {
      this.total = this.total + product.price;
    });
    this.totalItems = this.products.length;
  }

  buy(): void {
    //TODO
  }

  cleanCart() {
    this.products = [];
    this.totalItems = 0;
    this.total = 0;
  }

  deleteItem(product:any ) {
    console.log(product);
  }
}

