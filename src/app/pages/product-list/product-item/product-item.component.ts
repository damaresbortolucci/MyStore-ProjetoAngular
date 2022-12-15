import { Component, Input, OnChanges, TemplateRef, ViewChild  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ProductService } from './../../../services/product.services';
import Product from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnChanges {

  @Input() product?: Product;
  @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;

  constructor(private productService: ProductService, private dialog: MatDialog) {
  }

  ngOnInit() {
    console.log(`ProductList Item com id = ${this.product?.id}!`);
  }


  deleteItem() {
    if (this.product) this.productService.deleteProduct(this.product.id);
  }


  openDialog() {
    if (this.dialogTemplate) {
      this.dialog.open(this.dialogTemplate, {
        data: { title: "Atualizar Produto" }
      });
    }
  }


  ngOnChanges(): void {
    console.log('Product List Item has changed!');
  }
}
