import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = environment.apiUrl + '/login';
  registerUrl = environment.apiUrl + '/register';

  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  userLogin(credentials): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }

  register(userData): Observable<any> {
    return this.http.post(this.registerUrl, userData);
  }

}
