import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from '../add-product/add-product.component';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  loading = true;
  @Input() set selectedProductId(value) {
    this.loading = true;
    this.productService.getProductById(value)
      .pipe(delay(1000))
      .subscribe(res => {
        this.loading = false;
        this.selectedProduct = res;
      });
  }
  selectedProduct;
  @Output() refreshProductList = new EventEmitter();
  @Output() hideProductDetail = new EventEmitter();

  constructor(
    private productService: ProductService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  updateProduct() {
    this.productService.updateProduct(this.selectedProduct)
      .pipe(delay(1000))
      .subscribe(res => {
        this.refreshProductList.emit();
      });
  }

  openAddProductModal() {
    const modalRef = this.modalService.open(AddProductComponent);
    modalRef.componentInstance.refreshProductList.subscribe(() => {
      this.refreshProductList.emit();
    });
  }

  deleteProduct() {
    this.productService.deleteProduct(this.selectedProduct._id)
      .subscribe(res => {
        this.refreshProductList.emit();
      });
  }

}
