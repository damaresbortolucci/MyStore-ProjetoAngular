import { MaterialModule } from './../material/material.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductCreateComponent,
    PageNotFoundComponent,
    ProductDeleteComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule, 
    SharedModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    ProductListComponent, 
    ProductItemComponent,
    ProductCreateComponent,
    PageNotFoundComponent,
    ProductDeleteComponent
  ]
})
export class PagesModule {}
