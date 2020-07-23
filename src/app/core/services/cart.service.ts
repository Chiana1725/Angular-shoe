import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { ComService } from 'src/app/core/com.service';
import * as Calcshipfee from '../../shared/model';
import { map, retry } from 'rxjs/operators';

export interface CalcshipfeeInfo extends Calcshipfee.CalcshipfeeResponse {id: number};


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private calcshipfeeInfo = {} as CalcshipfeeInfo;

  lists;
  cardList: Array<any> = [];   // 购物车商品信息
  ProductdetailURL; //动态
 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public com: ComService,
    private HttpClient: HttpClient
  ) { 
  }

  postCalcshipfee(req):Observable<Calcshipfee.CalcshipfeeResponse>{
    return this.HttpClient.post<any>(Calcshipfee.CalcshipfeeURL,req,{observe:'response'}).pipe(
      map((resp) => {
        if(resp.status !== 200){
          throw new Error ('Value expected!');
        }
        return resp.body ?? {} as Calcshipfee.CalcshipfeeResponse;
      })
    )
  }

  addGoodToCart(goodInfo: any){
    this.cardList.push(goodInfo);
    // console.log(this.cardList);

    localStorage.setItem('cart_lists',JSON.stringify(this.cardList));
    

    this.route.params.subscribe((value:any) => {
      this.requestContent(value.pid);
    })
  }
  requestContent(pid){
    var api = 'api/product/product-units?pid='+pid;
    this.com.get(api).then((response:any)=>{
      // console.log(response);
      this.ProductdetailURL = response;
      this.lists = this.ProductdetailURL.data[0];
      localStorage.setItem("cart_product",JSON.stringify(response));
    })
  }


  getCartInfo(){
    // console.log(this.cardList);//输出结果
    return this.cardList;
  }

  clearCart(){
    localStorage.removeItem('cart_lists');
  }


}
