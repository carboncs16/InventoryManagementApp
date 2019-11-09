import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': sessionStorage.getItem('x-access-token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  getProductsUrl = environment.apiUrl + '/getProducts';
  getProductByIdUrl = environment.apiUrl + '/getProduct';
  updateProductUrl = environment.apiUrl + '/updateProduct';
  addProductUrl = environment.apiUrl + '/addProduct';
  deleteProductUrl = environment.apiUrl + '/deleteProduct';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.getProductsUrl, httpOptions);
  }

  getProductById(id): Observable<any> {
    return this.http.get(this.getProductByIdUrl + `/${id}`, httpOptions);
  }

  updateProduct(data): Observable<any> {
    return this.http.put(this.updateProductUrl, data, httpOptions);
  }

  addProduct(data): Observable<any> {
    return this.http.post(this.addProductUrl, data, httpOptions);
  }

  deleteProduct(id): Observable<any> {
    return this.http.post(this.deleteProductUrl, { _id: id }, httpOptions);
  }

}
