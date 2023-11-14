import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  total: number = 0;
  totalItems: number = 0;
  items: CartItem[] = [
    {
      id: 0,
      name: 'Laptop',
      price: 999.99,
      category: 'Electronics',
      count: 1,
    },
    {
      id: 1,
      name: 'T-shirt',
      price: 19.99,
      category: 'Apparel',
      count: 1,
    },
    {
      id: 2,
      name: 'Headphones',
      price: 79.99,
      category: 'Electronics',
      count: 1,
    },
    {
      id: 3,
      name: 'Running Shoes',
      price: 49.99,
      category: 'Footwear',
      count: 1,
    },
    {
      id: 4,
      name: 'Backpack',
      price: 39.99,
      category: 'Accessories',
      count: 1,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('addToCart', (event) => {
      this.addItemHandler(event);
    });
    this.calculateTotals();
  }

  addItemHandler(event: any) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === event.detail.id
    );
    if (itemIndex != -1) {
      const tempArray = [...this.items];
      tempArray[itemIndex] = {
        ...this.items[itemIndex],
        count: this.items[itemIndex].count + 1,
      };
      this.items = tempArray;
    } else {
      this.items.push({
        ...event.detail,
        count: 1,
      });
    }

    this.calculateTotals();

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
    this.items = this.items.filter((item) => {
      if (item.id === deletedCartItem.id) {
        return false;
      } else {
        return item.id !== deletedCartItem.id;
      }
    });

    this.calculateTotals();
    //TODO Send delete item event to summary
  }

  incrementCount(updatedItem: CartItem) {
    updatedItem.count++;
    this.calculateTotals();
  }

  decrementCount(item: CartItem) {
    if (item.count > 0) {
      item.count--;
      this.totalItems--;
      this.total -= item.price;
    }

    if (item.count === 0)
      this.deleteItem(item);

    this.calculateTotals();
  }

  calculateTotals() {
    this.total = 0;
    this.items.forEach((item) => {
      this.total = this.total + (item.price * item.count);
    });

    this.totalItems = 0;
    this.totalItems = this.items.reduce((totalItems, item) => {
      return (totalItems += item.count);
    }, 0);
  }
}
