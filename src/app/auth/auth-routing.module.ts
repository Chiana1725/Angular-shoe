import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path:'login',component: LoginComponent, },
  {path:'register',component: RegisterComponent,},
  {path:'reset',component: ResetComponent,},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
