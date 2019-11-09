import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() selectedProduct;
  @Output() refreshProductList = new EventEmitter();

  constructor(
    private productService: ProductService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  updateProduct() {
    this.productService.updateProduct(this.selectedProduct)
    .subscribe(res => {
      console.log(res);
    });
  }

  openAddProductModal() {
    const modalRef = this.modalService.open(AddProductComponent);
    modalRef.componentInstance.refreshProductList.subscribe(() => {
      this.refreshProductList.emit()
    });
  }

}
