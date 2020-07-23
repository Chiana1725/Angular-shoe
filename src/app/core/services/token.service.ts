import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, RequestOptionsArgs, RequestOptions, Response, Headers } from '@angular/http';

const mergeToken = (options: RequestOptionsArgs = {}) => {
  const newOptions = new RequestOptions({}).merge(options);
  const newHeaders = new Headers(newOptions.headers);
  const jwt = localStorage.getItem('auth_token');
  if (jwt) {
    newHeaders.set('Authorization', jwt);
  }
  newOptions.headers = newHeaders;
  return newOptions;
};


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: Http, private authService:AuthService) { }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> { 
    return this.http.get(url, mergeToken(options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.post(url, body, mergeToken(options));
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.put(url, body, mergeToken(options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.delete(url, mergeToken(options));
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.patch(url, body, mergeToken(options));
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.head(url, mergeToken(options));
  }

}
