import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InventoryManagementUI';

  showLogout = false;

  constructor(
    private loginService: LoginService
  ) { }
  ngOnInit() {
    this.loginService.isLoggedIn.subscribe(flag => {
      this.showLogout = flag;
    });
    if (sessionStorage.getItem('x-access-token')) {
      this.showLogout = true;
    }
  }
}
