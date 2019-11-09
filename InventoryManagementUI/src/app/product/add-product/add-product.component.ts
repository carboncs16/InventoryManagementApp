import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  selectedProduct = {};
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
    });
  }

}
