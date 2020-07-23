import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CartComponent } from './cart/cart.component';
import { UpdatePwdComponent } from './update-pwd/update-pwd.component';
import { DeclareComponent } from './../shared/declare/declare.component';
import { UserAccountResolveService } from '../core/resolves/user-account-resolve.service';

const routes: Routes = [
  { path:'account', component: AccountComponent,resolve:{myInfo:UserAccountResolveService} },

  // { path:'orderform', component:OrderFormComponent },
  { path:'orderform/detail/:id', component:OrderFormComponent },
  { path:'orderform/:state/:page', component:OrderFormComponent },
  { path:'orderform/:state', redirectTo: 'orderform/:state/1' },
  { path:'orderform/:state/:page', redirectTo: 'orderform/:state/:page' },
  { path: 'orderform', redirectTo: 'orderform/-1/1' },

  { path:'orderdetail/:id', component:OrderDetailComponent, data:{animation:'orderdetail'}},

  { path:'updatepwd', component: UpdatePwdComponent },
  { path:'cart', component:CartComponent },
  { path:'declare', component:DeclareComponent },
  {path:'',pathMatch:'full',redirectTo:'account'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
