import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { delay } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from '../add-product/add-product.component';
import { Product } from 'src/app/models/ProductModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  selectedProduct: Product;
  loading = true;
  hideProductDetail = false;
  successMsg;
  errorMsg;

  constructor(
    private productService: ProductService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.productService.getProducts()
      .pipe(delay(1000))
      .subscribe(res => {
        this.loading = false;
        this.products = res;
      }, err => {
        this.errorMsg = 'Product could not be fetch';
        setTimeout(() => {
          this.successMsg = null;
          this.errorMsg = null;
        }, 4000);
      });
  }

  openAddProductModal() {
    const modalRef = this.modalService.open(AddProductComponent);
    modalRef.componentInstance.refreshProductList.subscribe(() => {
      this.getProducts();
      this.successMsg = 'Product Added Successfully';
      setTimeout(() => {
        this.successMsg = null;
        this.errorMsg = null;
      }, 4000);
    }, err => {
      this.errorMsg = 'Error Occured while adding';
      setTimeout(() => {
        this.successMsg = null;
        this.errorMsg = null;
      }, 4000);
    });
  }

  selectProduct(product) {
    this.selectedProduct = product;
    this.products.forEach(obj => {
      obj.rowSelected = false;
    });
    product.rowSelected = true;
  }

  assignMessage(event) {
    if (event && event.success) {
      this.successMsg = event.message;
    } else if (event && !event.success) {
      this.errorMsg = event.message;
    }
    setTimeout(() => {
      this.successMsg = null;
      this.errorMsg = null;
    }, 4000);
  }

}
