import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Router, Route , UrlSegment} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService:AuthService, private router:Router){}

  canLoad(route: Route, segments: UrlSegment[]):Observable<boolean> {
    let url = `/${route.path}`;
    console.log('checkLogin',url,this.checkLogin(url))
    // return of(true);
    return this.checkLogin(url);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('AuthGuard#canActivate called**********lccm1');
    // return true;
    let url: string = state.url;
    return this.checkLogin(url);
  }
  
  //  checkLogin(url: string): Observable<boolean> {
  //    if (this.authService.isLoggedIn)
  //    this.authService.redirectUrl = url;

  //    this.router.navigate(['/auth/login']);
  //    return ;
   
  //  }
  checkLogin(url: string): Observable<boolean>{
    this.authService.redirectUrl = url;
    return this.authService.GuardCheckLogin().pipe(
      tap(
      (isLoggedIn) => {
        if (! isLoggedIn){
          this.router.navigate(['/auth/login']);
        }
      },
      (err) => {
        alert("Authorization failed, please relogin now");
        
        this.authService.setStorage;
        // this.authService.logout();
        // this.router.navigate(['/auth/login']);
        }
      )
    );
  }
}
