import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from '../add-product/add-product.component';
import { delay } from 'rxjs/operators';
import { Product } from 'src/app/models/ProductModel';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  loading = true;
  valueChange: any = false;
  @Input() set selectedProductId(value) {
    this.loading = true;
    this.productService.getProductById(value)
      .pipe(delay(1000))
      .subscribe(res => {
        this.loading = false;
        this.selectedProduct = res;
      });
  }
  selectedProduct: Product;
  @Output() refreshProductList = new EventEmitter();
  @Output() hideProductDetail = new EventEmitter();

  constructor(
    private productService: ProductService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  updateProduct() {
    if (this.valueChange) {
      this.productService.updateProduct(this.selectedProduct)
        .pipe(delay(1000))
        .subscribe(res => {
          this.valueChange = false;
          this.refreshProductList.emit({ message: 'Product Updated Successfully', success: true });
        }, err => {
          this.refreshProductList.emit({ message: 'Error Occured while updating', success: false });
        });
    }
  }

  openAddProductModal() {
    const modalRef = this.modalService.open(AddProductComponent);
    modalRef.componentInstance.refreshProductList.subscribe(() => {
      this.refreshProductList.emit({ message: 'Product Added Successfully', success: true });
    }, err => {
      this.refreshProductList.emit({ message: 'Error Occured while adding', success: false });
    });
  }

  deleteProduct() {
    this.productService.deleteProduct(this.selectedProduct._id)
      .subscribe(res => {
        this.refreshProductList.emit({ message: 'Product Deleted Successfully', success: true });
        this.hideProductDetail.emit(true);
      }, err => {
        this.refreshProductList.emit({ message: 'Error Occured while deleting', success: false });
      });
  }

}
