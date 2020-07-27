import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';

@Injectable({
  providedIn: 'root'
})

export class UserAccountResolveService  implements Resolve<any>{
  constructor(
    private authService:AuthService,
    private orderService:OrderService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    return this.authService.GetLatestUserInfo()&&this.orderService.GetLastMyAddrInfo();
  }
}
