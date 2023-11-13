import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  total: number = 0;
  totalItems: number = 0;
  items: CartItem[] = [
    {
      "id": "0",
      "name": "Laptop",
      "price": 999.99,
      "category": "Electronics",
      "count": 1,
    },
    {
      "id": "1",
      "name": "T-shirt",
      "price": 19.99,
      "category": "Apparel",
      "count": 1,
    },
    {
      "id": "2",
      "name": "Headphones",
      "price": 79.99,
      "category": "Electronics",
      "count": 1,
    },
    {
      "id": "3",
      "name": "Running Shoes",
      "price": 49.99,
      "category": "Footwear",
      "count": 1,
    },
    {
      "id": "4",
      "name": "Backpack",
      "price": 39.99,
      "category": "Accessories",
      "count": 1,
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
    //TODO set up event listener for add item event
    this.items.forEach(product => {
      this.total = this.total + product.price;
    });
    this.totalItems = this.items.reduce((totalItems, item) => {
      return totalItems += item.count
    }, 0);
  }

  buy(): void {
    //TODO
  }

  cleanCart() {
    this.items = [];
    this.totalItems = 0;
    this.total = 0;

    //TODO Send clear cart event
  }

  deleteItem(deletedCartItem: CartItem) {
    this.items = this.items.filter(item => {
      return item.id !== deletedCartItem.id; 
    });

    //TODO Send delete item event to summary
  }

  incrementCount(updatedItem: CartItem) {
    updatedItem.count++;
    this.totalItems++;
    this.total += updatedItem.price;
  }

  decrementCount(item: CartItem) {
    if (item.count > 0) {
      item.count--;
      this.totalItems--;
      this.total -= item.price;
    }

    if (item.count === 0) {
      this.deleteItem(item);
    }
  }
}

