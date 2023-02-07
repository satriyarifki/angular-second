import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
