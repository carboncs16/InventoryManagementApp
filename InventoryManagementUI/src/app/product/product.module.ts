import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductInterceptor } from './product.interceptor';


@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, AddProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ProductInterceptor, multi: true }
  ],
  entryComponents: [
    AddProductComponent
  ]
})
export class ProductModule { }
