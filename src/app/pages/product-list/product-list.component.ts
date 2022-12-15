import { Component, OnChanges, OnInit } from '@angular/core';

import Product from 'src/app/models/Product';
import { ProductService } from './../../services/product.services';

@Component({
  selector: 'app-task-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  productList: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
    console.log("product List was born!");
  }

  ngOnChanges():void {
    console.log("product List has changed!");
  }
}
