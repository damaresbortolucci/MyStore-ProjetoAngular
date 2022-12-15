import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../services/product.services';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
  providers: [
    {
      provide: MatDialogRef,
      useValue:{}
    }
  ]
})
export class ProductDeleteComponent {

  @Input() idProduct?: number;

  constructor(private productService: ProductService, public dialogRef: MatDialogRef<any>) {}


  cancel() {
    this.dialogRef.close();
  }

  deleteProduct(){
    if (this.idProduct){
      this.productService.deleteProduct(this.idProduct);
      this.dialogRef.close();
    }
  }
}
