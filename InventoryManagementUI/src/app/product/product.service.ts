import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProductsUrl = environment.apiUrl + '/getProducts'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.getProductsUrl)
  }

}
