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
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  register() {
    this.loginService.register(this.registerData.value)
    .subscribe(res => {
      console.log(res);
      
    })
  }

}
