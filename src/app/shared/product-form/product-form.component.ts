import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { ProductService } from '../../services/product.services';

import Product from 'src/app/models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [
    {
      provide: MatDialogRef,
      useValue:{}
    }
  ]
})
export class ProductFormComponent {
  @Input() newProduct: Product = new Product("Novo Produto");
  @Input() requestType: string = "post";
  @Input() closeDialog: () => void = () => {};

  productForm?: FormGroup;

  constructor(private productService: ProductService, public dialogRef: MatDialogRef<any>) {}

  ngOnInit() {
    this.productForm = new FormGroup({
      title: new FormControl(this.newProduct.title),
      description: new FormControl(this.newProduct.description),
      price: new FormControl(this.newProduct.price),
      quantity: new FormControl(this.newProduct.quantity),
      status: new FormControl(this.newProduct.status),
      image: new FormControl(this.newProduct.image),
    });
  }

  onSubmitForm() {
    this.productForm?.patchValue({
      title: this.productForm?.controls['title'].value,
      description: this.productForm?.controls['description'].value,
      price: (this.productForm?.controls['price'].value),
      quantity: this.productForm?.controls['quantity'].value,
      status: this.productForm?.controls['status'].value,
      image: this.productForm?.controls['image'].value
    })

    this.newProduct = {id: this.newProduct.id, ...this.productForm?.value};

    if (this.requestType == "post") {
      this.productService.postProduct(this.newProduct);
    } else {
      this.productService.updateProduct(this.newProduct.id, this.newProduct);
    }

    this.dialogRef.close();
    // console.log(this.newTask.id);
  }
}
