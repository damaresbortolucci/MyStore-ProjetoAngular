import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../material/material.module';

import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { InventoryDirective } from './directives/inventory.directive';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    DialogComponent,
    ProductFormComponent,
    InventoryDirective,
    FooterComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule, 
    RouterModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent, 
    DialogComponent, 
    ProductFormComponent,
    InventoryDirective,
    FooterComponent
  ],
})
export class SharedModule {}
