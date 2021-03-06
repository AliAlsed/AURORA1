import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    product = ['pen', 'book'];
    productName = 'A Book';
    isDisabled = true;
     products = ['A Book', 'A Tree'];

   constructor() {
       setTimeout(() => {
      // this.productName = 'A Tree';
      this.isDisabled = false;
       }, 3000);
     }
     onAddProduct() {
    this.products.push(this.productName);
     }
    onRemoveProduct(productName: string) {
     this.products = this.products.filter(p => p !== productName);
     }
   }
