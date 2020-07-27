import { LoginPostData, LoginResponse, LoginURL, ErrorMsgResponse, 
  LogoutResponse,LogoutURL, MyInfoURL, UpdatepwdResponse, Updatepwd, UpdatepwdURL,
  UpdataMyAddr, UpdataMyAddrResponse, UpdataMyAddrURL
} from './../../shared/model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { ComService } from './../com.service';
import { Router } from '@angular/router';
//声明
export interface UserInfo extends LoginResponse { }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private userInfo = { email:'', groupId:1, id:1, name:'', number:1, type:1 }
  // userInfo;
  private userInfo = { 
    // email:"", groupId:1, id:1, name: "", number:"", type:1 
  } as UserInfo;

  private isLoggedIn = false;
  redirectUrl: string;
  RedirectURL = '';


  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type':  'application/json',
      'Authorization': 'auth-token'
    })  
  }

  private tokeyKey = "token";//
  private token: string;//

  counter = 3600000;//小时
  tokenTimer: any;
  isAuth = false;

  constructor(private httpClient: HttpClient, private comService: ComService, private router:Router ) {

    const userInfoText = localStorage.getItem('personal_info');
    if(userInfoText != null){
      this.userInfo = JSON.parse(userInfoText);
    }

   }


  GuardCheckLogin(): Observable<boolean> {
    if (this.isLoggedIn) {
      console.log('return 1')
      return of(true); }
    if (localStorage.getItem('auth_token') == null) {
      console.log('return 0')
      { return of(false); }
    }
    // TODO 改为访问身份验证接口
    return this.GetLatestUserInfo().pipe(
      map((data) => {
        this.isLoggedIn = true;
        console.log('getMyInfo true')
        return true;
      })
    );
  }

  getAuthorizationToken(): string {
    const token = localStorage.getItem('auth_token');
    if (token == null) {
      return "";
    }
    return token;
  }

  //这个可以不用，没有用到
  login(req: LoginPostData): Observable<LoginResponse> {
    return this.httpClient.post<any>(LoginURL, req, { observe: 'response' })
      .pipe(
        map((resp) => {
          if (resp.status !== 200) {
            throw new Error("login failed:" + (resp.body as ErrorMsgResponse).msg);
          }
          this.isLoggedIn = true;
          this.SetUserInfo(resp.body ?? {} as UserInfo);
          localStorage.setItem('auth_token', resp.headers.get('Authorization') ?? '');
          return resp.body ?? {} as LoginResponse;
        })
      )
  }

  public AuthComeback(callBack) {
    // console.log('callBack', callBack, this.redirectUrl)
    // this.router.navigate([callBack]);
    this.redirectUrl?this.router.navigate([this.redirectUrl]):    
    typeof(callBack)==='string'?this.router.navigate([callBack]):callBack();    
  }

  setStorage(name: string, data: any, needSession: boolean = false) {
    window.localStorage.setItem("Authorization", JSON.stringify(data));
  }
  tokenHandle() {
    if (this.isAuth) {
      this.updateToken();
    } else {
      clearInterval(this.tokenTimer);
    }
  }
  updateToken() {
    this.tokenTimer = setInterval(() => {
      this.comService.httpGet('/api/auth/verify-jwt').subscribe((res) => {
        const token = { Authorization: res.headers.get('Authorization') };
        // this.setStorage('token',token);
        this.setStorage('auth_token',token);//登录修正
      });
    },this.counter);
  }



  //个人信息
  SetUserInfo(uinfo:UserInfo): void{
    localStorage.setItem('personal_info', JSON.stringify(uinfo));
    this.userInfo = uinfo;
    this.isLoggedIn = true;
  }
  GetUserInfo(): UserInfo {
    return this.userInfo;
  }                                        
  ClearUserInfo(): void {
    localStorage.removeItem('personal_info');
    this.userInfo = {} as UserInfo;
  }
  GetLatestUserInfo(): Observable<UserInfo>{
    return this.httpClient.get<any>(MyInfoURL,{observe:'response'}).pipe(
      map((resp) => {
        if (resp.status !== 200){
          throw new Error("get info failed:" + resp.body.msg);
        }
        this.userInfo = resp.body ?? {} as UserInfo;
        return this.userInfo
      })
    )
  }



  logout():Observable<LogoutResponse>{
    return this.httpClient.get<any>(LogoutURL).pipe(
      map((resp) =>{
        if(resp.status !== 200){
          this.isLoggedIn = true;
          this.ClearUserInfo();//个人信息
          localStorage.removeItem('auth_token');
          throw new Error("get info failed:" + resp.body.msg);
        }
        return resp.body ?? {} as LogoutResponse;
      }),
      // catchError(err => of([console.log('这是一个错误')]))
    )
  }

  // logout(): void{
  //   this.isLoggedIn = false;
  // }

  //修改密码
  // UpdatepwdURL='';
  Updatepwd( req:Updatepwd ): Observable<UpdatepwdResponse>{
    return this.httpClient.post<any>(UpdatepwdURL,req,{observe:'response'}).pipe(
      map((resp) => {
        if (resp.status !== 200){
          throw new Error ;
        }
        return resp.body ?? {} as UpdatepwdResponse;
      })
    )
  }


  //修改地址  /*7-7改*/
  Updateaddr(req:UpdataMyAddr) : Observable<UpdataMyAddrResponse>{
    return this.httpClient.post<any>(UpdataMyAddrURL,req,{observe:'response'}).pipe(
      map((resp) => {
        if (resp.status !== 200){
          throw new Error ;
        }
        return resp.body ?? {} as UpdataMyAddrResponse;
      })
    )
  }




}
