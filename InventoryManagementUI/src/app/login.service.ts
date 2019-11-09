import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = environment.apiUrl + '/login';
  registerUrl = environment.apiUrl + '/register';

  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  userLogin(credentials: User): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }

  register(userData: User): Observable<any> {
    return this.http.post(this.registerUrl, userData);
  }

}
