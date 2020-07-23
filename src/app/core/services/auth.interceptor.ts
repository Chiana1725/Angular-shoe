import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpResponse} from '@angular/common/http';


@Injectable()

export class AuthInterceptor implements HttpInterceptor {
 
  /*被挂起的请求数组*/
  refreshSubscribers = [];
  
  constructor(private auth: AuthService) {}  

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    

    const authToken = this.auth.getAuthorizationToken();

    const authReq = request.clone({
      headers: request.headers.set('Authorization', authToken)  
    });
    // console.log(authToken);

    const refreshToken = localStorage.getItem('refreshToken');
    

    

  
    //next对象表示拦截器链表中的下一个拦截器。
    return next.handle(authReq).pipe(  
      tap((event) => {  
        if (event instanceof HttpResponse){
          if (event.status === 401) {
            alert("Authorization failed. Redirect to login page.");
            // this.auth.logout();
            // localStorage.setItem('refreshToken',refreshToken);
            this.auth.login;
          }
        }
      })
    );
  }
}
