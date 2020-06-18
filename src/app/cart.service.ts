import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class CartService {

  constructor(
    private http : HttpClient
  ) { }
  items = new Set();

   addToCart(product) {
     console.log('service :: add to cart! ', product);
    this.items.add(product);
    console.log('items : ', this.items)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = new Set();
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json')
  }
}