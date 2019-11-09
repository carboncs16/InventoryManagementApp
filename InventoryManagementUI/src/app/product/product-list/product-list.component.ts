import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[] = [];
  selectedProduct;
  loading = true;
  hideProductDetail = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .pipe(delay(1000))
      .subscribe(res => {
        this.loading = false;
        this.products = res;
      });
  }

}
