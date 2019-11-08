import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginService.userLogin(this.loginData.value)
      .subscribe(res => {
        this.router.navigate(['/products']);
      });
  }

}
