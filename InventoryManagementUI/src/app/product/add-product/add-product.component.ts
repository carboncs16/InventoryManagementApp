import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/ProductModel';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  selectedProduct: Product = {productName: null, price: null, rating: null};
  @Output() refreshProductList = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  addProduct() {
    this.productService.addProduct(this.selectedProduct)
    .subscribe(res => {
      this.refreshProductList.emit();
      this.activeModal.close();
    }, err => {
      this.refreshProductList.emit({ message: 'Error Occured while adding', success: false });
    });
  }

}
