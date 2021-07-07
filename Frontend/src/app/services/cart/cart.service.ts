import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/cart/cartItem';
import { CartItems } from 'src/app/models/cart/cartItems';
import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.productId==product.productId);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem=new CartItem();
      cartItem.product=product;
      cartItem.quantity=1;
      CartItems.push(cartItem)
    }
  }
  list():CartItem[]{
    return CartItems;
  }
  removeFromCart(product:Product)
  {
    let item = CartItems.find(c=>c.product.productId==product.productId);
    CartItems.splice(CartItems.indexOf(item),1);
  }
}
