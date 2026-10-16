import { Injectable, computed, signal } from '@angular/core';
import { CartItem, Product } from './models';
@Injectable({providedIn:'root'}) export class CartService {
private readonly itemsState=signal<CartItem[]>(this.restore()); readonly items=this.itemsState.asReadonly(); readonly count=computed(()=>this.itemsState().reduce((n,i)=>n+i.quantity,0)); readonly subtotal=computed(()=>this.itemsState().reduce((n,i)=>n+i.product.price*i.quantity,0));
private restore():CartItem[]{try{return JSON.parse(localStorage.getItem('flashkart-cart')||'[]') as CartItem[]}catch{return []}}
private save(v:CartItem[]){this.itemsState.set(v);try{localStorage.setItem('flashkart-cart',JSON.stringify(v))}catch{}}
add(p:Product){const a=this.itemsState(),found=a.find(i=>i.product.id===p.id);this.save(found?a.map(i=>i.product.id===p.id?{...i,quantity:i.quantity+1}:i):[...a,{product:p,quantity:1}])}
change(id:number,d:number){this.save(this.itemsState().map(i=>i.product.id===id?{...i,quantity:i.quantity+d}:i).filter(i=>i.quantity>0))} remove(id:number){this.save(this.itemsState().filter(i=>i.product.id!==id))} clear(){this.save([])}
}
