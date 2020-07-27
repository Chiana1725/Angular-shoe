import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, UrlSegment, Route  } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../core/services/auth.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    const url = `/${route.path}`;
    // console.log('route')
    return this.checkLogin(url);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  
  // checkLogin(url: string): boolean {
  //   if (this.authService.isLoggedIn) { return true; }
  //   this.authService.redirectUrl = url;
  //   this.router.navigate(['/login']);
  //   return false;
  // }

  checkLogin(url:string): Observable<boolean>{
    this.authService.RedirectURL = url;
    return this.authService.GuardCheckLogin().pipe(
      tap(
        (loggedIn)=>{
          if (! loggedIn){
            this.router.navigate(['/auth/login']);
          }
        },
        // 只有未登陆时(this.authService.isLoggedIn == false)检查登录请求失败才会触发
        (err) => {
          // alert("Authorization failed, please relogin now");
          // this.authService.logout();
          // this.router.navigate(['/auth/login']);
          this.authService.setStorage;
        }
      )
    )
  }
  

}
