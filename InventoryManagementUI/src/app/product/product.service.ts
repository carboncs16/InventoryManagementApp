import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProductsUrl = environment.apiUrl + '/getProducts';
  updateProductUrl = environment.apiUrl + '/updateProduct';
  addProductUrl = environment.apiUrl + '/addProduct';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.getProductsUrl);
  }

  updateProduct(data): Observable<any> {
    return this.http.put(this.updateProductUrl, data);
  }

  addProduct(data): Observable<any> {
    return this.http.post(this.addProductUrl, data)
  }

}
