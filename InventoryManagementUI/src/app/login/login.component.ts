import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  loading = false;
  invalidCredential = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    sessionStorage.clear();
    this.loginService.isLoggedIn.next(false);
  }

  login() {
    this.loading = true;
    this.invalidCredential = false;
    this.loginService.userLogin(this.loginData.value)
      .pipe(delay(1000))
      .subscribe(res => {
        sessionStorage.setItem('x-access-token', res.token);
        this.loginService.isLoggedIn.next(true);
        this.router.navigate(['/products']);
      }, err => {
        this.loading = false;
        this.invalidCredential = true;
      });
  }

}
