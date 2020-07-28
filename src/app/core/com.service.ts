import { ErrHandleService } from './services/err-handle.service';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';


import { map, catchError, retry } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router, Params } from '@angular/router';


import { lists } from './../shared/lists';
@Injectable({
  providedIn: 'root'
})
export class ComService {
  public shoeslist = lists;//静态数据 提供于商品跳转
  public domain: string = 'http://192.168.2.154:6031/';
  //同意支付弹窗控制
  isShowDeclare: boolean = false;
  purcharsID: any;

  //错误提示弹框
  popup: { title?: string, content: string, image?: string, confirm?: Function, hideCancel?: boolean } = null;
  //语言标志
  langIndex = 1;
  public lang;

  //面包屑导航
  navArr:{name:string,url:string}[] =[];


  constructor(
    private router: Router,
    private http: HttpClient,
    private errServ: ErrHandleService,
  ) { }

  changeTo() {
    this.langIndex = 'EN' === window.localStorage['lang'] ? 1 : 0;
    window.localStorage['lang'] = this.lang = ['EN'][this.langIndex];
  }

  createFormGroup(fields: any) {
    let group: any = {};
    fields.forEach(f => {
      if (f.group) {
        this.createFormGroup(f.value);
      } else {
        group[f.name] = new FormControl(f.value || '', f.validators)
      }
    });
    return new FormGroup(group);
  }

  doHttpState(res:any,url){
    console.log('res OF ' ,url,res);
    let state = res.status;
    let data = res.body;
    let ret :any =state;
    let msg = data?.msg ??res.error?.msg;
    switch(state){
      //请求成功
      case 200:
        let code = data.code;
        if(url==='/api/auth/login'){
          //登录设置token
          console.log('login')
          localStorage.setItem('auth_token', res.headers.get('Authorization') ?? '');
        }
        if(code){
          //返回的接口数据带code
         
          ret = data.data;
          if(code===1){
            ret = data.data;
          }else{            
            ret=res.msg;
          }
        }else{
          //返回的接口数据不带code
          ret = data;
        }
        break;
      //请求接口地址找不到
      case 400:
        this.router.navigate(['404']);
        break;
      //请求接口授权失败
      case 401:
        ret = res.error.msg;
        // this.router.navigate(['404',{code:state,msg:msg}])
        break;
      //请求服务器配置有问题
      default:
        this.router.navigate(['404',{code:state,msg}])
        break;
    }
    // console.log('ret',ret);
    return ret;
  }

  
  doHttpRes(res: any) {
    console.log('doHttp',res, res.body);

    let code = res.code;
    let data = res.msg;
    // let result = result;
    if (code === 200) {
      console.log(data);
      data = res.body;
      // this.router.navigate(['/auth/login']);
    } else {
      console.log(data);
      alert('error code'+code);
      // this.popup = {title:'提示401',content:res.data};
      // this.router.navigate(['/auth/login'])
      //弹出框的提示
    }
    return data;
  }



  // httpGet(url:string){
  //  return  this.http.get(url,{observe:'body'})
  //   .pipe(
  //     catchError(this.handleError<any>(null)),
  //     map((res:any)=>{
  //       return this.doHttpRes(res);
  //     })
  //   )
  // }


  // httpGet(url: string, mock: any = null, params?: any,): Observable<HttpResponse<any>> {
  //   const option = {};
  //   if (params) {
  //     option['params'] = params;
  //   }

  //   return this.http.get<any>(url, option).pipe(
  //     catchError(this.errServ.handleError('httpGet', null, mock)),
  //     retry(3),
  //     /*  map((res:any)=>{
  //        return this.doHttpRes(res);
  //      }) */

  //   );
  // }

  httpGet<T>(
    url: string,
    params?: HttpParams | { [param: string]: string | string[]; },
    observe: 'body' | 'response' = 'body',
    responseType: 'json' | 'text' = 'json'
  ): Observable<T> | Observable<HttpResponse<T>> | Observable<string> | Observable<HttpResponse<string>> | any {
    if (observe === 'body' && responseType === 'json') {
      return this.http.get<T>(url, { params, observe, responseType});
    }
    
    if (observe === 'body' && responseType === 'text') {
      return this.http.get(url, { params, observe, responseType}) as Observable<string>;
    }

    if (observe === 'response' && responseType === 'json') {
      return this.http.get<T>(url, { params, observe, responseType});
    }

    if (observe === 'response' && responseType === 'text') {
      return this.http.get(url, { params, observe, responseType});
    }

    return null;
  }

  // httpGet(url: string, params?: any){
  //   const option = {};

  //   if (params) {
  //     option['params'] = params;
  //   }

  //   return this.http.get<any>(url,option).pipe(
  //     retry(3),
  //     catchError(this.handleError)
  //   )
  // }

httpPost(url: string, data: any) {
    return this.http.post(url, data, { observe: 'response' })
      .pipe(
        catchError(this.handleError<any>(null)),
        map((res: any) => {
          // return this.doHttpRes(res);
          // console.log('httpPost',res);
          return this.doHttpState(res,url);
        })
      )
  }


  // httpPostWithParams(url:string,data:any, params: HttpParams){
  //   this.http.post(url,data,{observe:'response', params: params}) 
  //   .pipe(
  //     catchError(this.handleError<any>(null)),
  //     map((res:any)=>{
  //       return this.doHttpRes(res);
  //     })
  //   )
  //   .subscribe((res)=>{
  //     console.log('res',res);
  //   })
  // }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.log('handleError',error)
      // let res = error.error;
      // res.data = result || null;

      return of(error as T);
    };
  }



  //state状态码
  httpReq(method: string, uri: string, res: any, mockRes: any, successFn: any, data?: any, failFn?: any) {
    this.http[method](uri, data).pipe(catchError(this.handleError(uri,))).subscribe((res: any) => {
      // this.Response(res, successFn, failFn);
    })
  }

  //商品跳转详情
  get(api) {
    return new Promise((resolve, rejects) => {
      this.http.get(this.domain + api).subscribe((response) => {
        resolve(response);
      })
    })
  }



}
