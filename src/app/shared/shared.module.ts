import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../material/material.module';

import { ProductDirective } from './directives/task.directive';

import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { ProductFormComponent } from './product-form/product-form.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    ProductDirective, 
    DialogComponent,
    ProductFormComponent
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
    ProductDirective, 
    DialogComponent, 
    ProductFormComponent
  ],
})
export class SharedModule {}
