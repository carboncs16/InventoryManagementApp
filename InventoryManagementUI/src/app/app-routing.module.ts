import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';


const routes: Routes = [
  { path: '', component: LoginComponent, canDeactivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'products', loadChildren: () => import('./product/product.module').then(mod => mod.ProductModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
