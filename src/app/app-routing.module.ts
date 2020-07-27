import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthGuard } from './core/services/auth.guard';

import { IndexComponent } from './index/index.component';
const routes: Routes = [
  {
    path:'auth',
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
  
    path: 'index', component: IndexComponent,
    // loadChildren:() => import('./index/index.module').then(m => m.IndexModule )
  },
  {
    path:'user',
    canLoad: [ AuthGuard ],
    loadChildren:() => import('./user/user.module').then(m => m.UserModule )
  },
  {
    path:'goods',
    // canLoad: [ AuthGuard ],
    loadChildren:() => import('./goods/goods.module').then(m => m.GoodsModule )
  },
  {
    path:'protocals',
    loadChildren:()=>import('./protocals/protocals.module').then(m=>m.ProtocalsModule)
  },
  { path:'', pathMatch: 'full', redirectTo:'/index'},
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
