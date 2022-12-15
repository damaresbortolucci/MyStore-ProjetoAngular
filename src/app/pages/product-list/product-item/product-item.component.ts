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
  @ViewChild('dialogTemplateUpdate') dialogTemplateUpdate?: TemplateRef<any>;
  @ViewChild('dialogTemplateDelete') dialogTemplateDelete?: TemplateRef<any>;

  
  constructor(private productService: ProductService, private dialog: MatDialog) {
  }

  ngOnInit() {
    console.log(`ProductList Item com id = ${this.product?.id}!`);
  }

  
  openDialog() {
    if (this.dialogTemplateUpdate) {
      this.dialog.open(this.dialogTemplateUpdate, {
        data: { title: "Atualizar Produto" }
      });
    }
  }

  openDialogDelete() {
    if (this.dialogTemplateDelete) {
      this.dialog.open(this.dialogTemplateDelete, {
        data: { title: "Excluir o produto?" }
      });
    }
  }


  ngOnChanges(): void {
    console.log('Product List Item has changed!');
  }
}
