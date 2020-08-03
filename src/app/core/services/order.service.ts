import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, retry, catchError } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as MyOrder from '../../shared/model';
import * as PostOrder from '../../shared/model';
import * as PayOrder from '../../shared/model';
import * as MyAddr from './../../shared/model';//无用
import { PayOrderResponse, CusProcOrderResponse } from './../../shared/model';

/*获取所有订单*/
export interface MyorderInfo extends MyOrder.MyOrderResponse {
  amount: number, createdAt: string, currency: string, goods: string, id: string, state: number, updatedAt: string, userId: string
}

/*地址*/
export interface MyAddrInfo extends MyAddr.MyAddrResponse {
  city:string; country:string; createAt:string; firstName:string; id:number; lastName:string; phone: string; postCode: string; state: string; streetAddress: string; tag: string; updatedAt:string; userId:string
}

export interface PayInfo extends PayOrderResponse { };

export interface CusProcOrderInfo extends CusProcOrderResponse {};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private payInfo = {} as PayInfo;
  private cusProcOrderInfo = {} as CusProcOrderInfo;

  private myorderInfo = {orders:[ {} ]} as MyorderInfo;
  private myaddrInfo = {data:[ {} ]} as MyAddrInfo;

  constructor(
    private HttpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    ) {
    const myorderInfoText = localStorage.getItem('my_orders');
    if (myorderInfoText != null){
      this.myorderInfo = JSON.parse(myorderInfoText);
    }
 
    /*地址*/
    const myaddrInfoText = localStorage.getItem('my_addr');
    if (myaddrInfoText != null){
      this.myaddrInfo = JSON.parse(myaddrInfoText);
    }

    /*提交订单返回数据*/
    const payInfoText = localStorage.getItem('pay_url');
    if (payInfoText != null){
      this.payInfo = JSON.parse(payInfoText);
    }

    /*用户修改订单*/
    const cusProcOrderInfoText = localStorage.getItem('cus_url');
    if (cusProcOrderInfoText != null){
      this.cusProcOrderInfo = JSON.parse(cusProcOrderInfoText);
    }
   }


  //postorder
  CreateOrder(req): Observable<PostOrder.PostOrderResponse>{
    return this.HttpClient.post<any>(PostOrder.PostOrderURL,req,{observe:'response'}).pipe(
      map((resp) => {
        if (resp.status !== 200){
          throw new Error ('Value expected!');
        }
        return resp.body ?? {} as PostOrder.PostOrderResponse;
      })
    )
  }




  CreatePay(req): Observable<PayOrderResponse>{
    return this.HttpClient.post<any>(PayOrder.PayOrderURL,req,{observe:'response'}).pipe(
      map((resp)=>{
        const fanhui = resp.body;
        localStorage.setItem('pay_url',JSON.stringify(resp.body));
        this.payInfo = resp.body;
        if(resp.status !== 200){
          throw new Error ('');
        }
        this.payInfo =resp.body ?? {} as PayInfo;
      return resp.body ?? {} as PayOrderResponse;
      
      })
    );
  }

  SetPayInfo(uinfo:PayInfo): void{
    this.payInfo = uinfo;
  }
  GetPayInfo(): PayInfo {
    return this.payInfo;
  }





  SetMyorderInfo(info: MyorderInfo ): void{
    localStorage.setItem('my_orders', JSON.stringify(info));
    this.myorderInfo = info;
  }
  GetMyorderInfo(): MyorderInfo{
    return this.myorderInfo;
  }

  GetLastMyorderInfo(): Observable<MyorderInfo>{
    return this.HttpClient.get<any>(MyOrder.MyOrdersURL,{observe:'response'}).pipe(
      map((resp) => {
        if (resp.status !== 200){
          throw new Error("get info failed:" + resp.body.msg);
        }
        this.SetMyorderInfo(resp.body ?? {} as MyorderInfo);
        localStorage.setItem('my_orders',JSON.stringify(this.myorderInfo));
        return resp.body ?? {} as MyOrder.MyOrderResponse;
      })
    )
  }



  getAllOrders(){
    let state = this.route.snapshot.paramMap.get("sate");
    let page = this.route.snapshot.paramMap.get("page");
    console.log(state);
    this.get('/api/order/my-orders',{ sort:"true", len:"5",})
    .subscribe((res) => {
        console.log(res+"页码正确的数据");       
      })
  }
  get(url: string, params?:any): Observable<MyorderInfo>{
    const option = {};
    if(params){
      option['params'] = params;
    }
    return this.HttpClient.get<any>(url,option).pipe(
      retry(3),
    )
  }



  



  /*地址*/
  SetMyAddrInfo(info: MyAddrInfo): void{
    localStorage.setItem('my_addr', JSON.stringify(info));
    this.myaddrInfo = info;
  }
  GetMyAddrInfo(): MyAddrInfo{
    return this.myaddrInfo;
  }
  GetLastMyAddrInfo(): Observable<MyAddrInfo>{
    return this.HttpClient.get<any>(MyAddr.MyAddrURL,{observe:'response'}).pipe(
      map((resp)=>{
        if (resp.status !== 200){
          throw new Error('get info failed:' + resp.body.msg);
        }
        this.SetMyAddrInfo(resp.body ?? {} as MyAddrInfo);
        localStorage.setItem('my_addr',JSON.stringify(this.myaddrInfo));
        return resp.body ?? {} as MyAddr.MyAddrResponse;
      })
    )
  }
  
}
