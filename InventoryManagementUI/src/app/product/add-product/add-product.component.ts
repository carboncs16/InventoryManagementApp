import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/ProductModel';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productData = this.fb.group({
    productName: ['', Validators.required],
    price: ['', Validators.required],
    rating: ['', Validators.required]
  });

  selectedProduct: Product = { productName: null, price: null, rating: null };
  @Output() refreshProductList = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    private productService: ProductService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  addProduct() {
    if (this.productData.status === 'VALID') {
      this.productService.addProduct(this.productData.value)
        .subscribe(res => {
          this.refreshProductList.emit();
          this.activeModal.close();
        }, err => {
          this.refreshProductList.emit({ message: 'Error Occured while adding', success: false });
        });
    }
  }

}
