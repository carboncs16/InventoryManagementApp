import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, AddProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule
  ],
  entryComponents: [
    AddProductComponent
  ]
})
export class ProductModule { }
