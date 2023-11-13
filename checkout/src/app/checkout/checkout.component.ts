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
      "id": "0",
      "name": "Laptop",
      "price": 999.99,
      "category": "Electronics"
    },
    {
      "id": "1",
      "name": "T-shirt",
      "price": 19.99,
      "category": "Apparel"
    },
    {
      "id": "2",
      "name": "Headphones",
      "price": 79.99,
      "category": "Electronics"
    },
    {
      "id": "3",
      "name": "Running Shoes",
      "price": 49.99,
      "category": "Footwear"
    },
    {
      "id": "4",
      "name": "Backpack",
      "price": 39.99,
      "category": "Accessories"
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
    //TODO set up event listener for add item event
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

    //TODO Send clear cart event
  }

  deleteItem(deletedProduct: Product) {
    this.products = this.products.filter(product => {
      return product.id !== deletedProduct.id; 
    });

    //TODO Send delete item event to summary
  }
}

