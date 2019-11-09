import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.pattern(/^[A-Za-z]\w{7,14}$/)]]
    //To check a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter
  });

  successRegistration: boolean = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    if (this.registerData.status === 'VALID') {
      this.loginService.register(this.registerData.value)
        .subscribe(res => {
          this.loading = false;
          this.successRegistration = true;
          this.registerData.setValue({
            username: '',
            password: '',
            email: ''
          });
          this.registerData.get('username').setErrors({
            invalid: false
          });
          this.registerData.get('password').setErrors({
            invalid: false
          });
          this.registerData.get('email').setErrors({
            invalid: false
          });
        });
    } else {
      this.loading = false;
      this.successRegistration = false;
    }
  }

}
