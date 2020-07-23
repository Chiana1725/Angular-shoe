import { MyAddrInfo } from './order.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import * as Api from '../../shared/model';
import * as MyAddr from '../../shared/model';
// import { lists, myAddr, products } from './../../shared/lists';
import { ErrHandleService } from './err-handle.service';
import { products } from '../../shared/lists';
import { BackendApiResponse, Productdetail, ProductdetailResponse, ProductdetailURL } from './../../shared/model';

export interface ProductlistInfo extends Api.ProductlistResponse {
  brandId: string; categoryId: string; createdAt: string; detail:string; discount:number; flags:number; id:string; images: string; name: string; price:number; updatedAt:string;
}

export interface ProductdetailInfo extends Api.ProductdetailResponse{ 
  amount: number; brandId: string; createdAt: string; detail: string; discount: number; id: string; images: string; parcelInfo: string; price: number; productId: string; productName: string, specs: string; subject: string; updateAt: string
}

export interface ProductBrandsInfo extends Api.ProductBrandsResponse { 
  country: string; description: string; id: string; images: string 
};


export interface MyAddrInfoInfo extends MyAddr.MyAddrResponse {
  city:string; country:string; createAt:string; firstName:string; id:number; lastName:string; phone: string; postCode: string; state: string; streetAddress: string; tag: string; updatedAt:string; userId:string
}


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  
  private productlistInfo = {products:[ {} ]} as ProductlistInfo;
  private productdetailInfo = {data:[ {} ]} as ProductdetailInfo;
  private myAddrInfo = {data:[{}]} as MyAddrInfoInfo;
  private productBrandsInfo = {} as ProductBrandsInfo;

  constructor(
    private httpClient: HttpClient,
    public errServ: ErrHandleService,
    ) {

    const productlistInfoText = sessionStorage.getItem('product_list');
    if (productlistInfoText != null){
      this.productlistInfo = JSON.parse(productlistInfoText);
    }

    const productdetailInfoText = sessionStorage.getItem('product_detail');
    if (productdetailInfoText != null){
      this.productdetailInfo = JSON.parse(productdetailInfoText);
    }

    const productBrandsInfoText = sessionStorage.getItem('product_brands');
    if(productBrandsInfoText != null){
      this.productBrandsInfo = JSON.parse(productBrandsInfoText);
    }

   }


  SetProductlistInfo(info: ProductlistInfo ): void{
    sessionStorage.setItem('product_list', JSON.stringify(info));
    this.productlistInfo = info;
  }
  GetProductlistInfo(): ProductlistInfo {
    return this.productlistInfo;
  }
  GetLastProductlistInfo(): Observable<ProductlistInfo>{
    return this.httpClient.get<any>(Api.ProductlistURL,{observe:'response'}).pipe(
      map((resp) => {
        if (resp.status !== 200){
          throw new Error("get info failed:" + resp.body.msg);
        }
        this.SetProductlistInfo(resp.body ?? {} as ProductlistInfo);
        //handleError*
        // this.errServ.handleError('getLastProductlist', {}, lists);//*
        sessionStorage.setItem('product_list',JSON.stringify(this.productlistInfo));
        return resp.body ?? {} as Api.ProductlistResponse;
      })
      // catchError(this.errServ.handleError('getLastProductlist', {}, lists))
    )
  }


  SetProductdetailInfo(info: ProductdetailInfo): void{
    sessionStorage.setItem('product_detail',JSON.stringify(info));
    this.productdetailInfo = info;
  }
  GetProductdetailInfo(): ProductdetailInfo {
    return this.productdetailInfo;
  }
  GetLastProductdetailInfo(): Observable<ProductdetailInfo>{
    return this.httpClient.get<any>(Api.ProductdetailURL,{observe:'response'}).pipe(
      map((resp) => {
        if (resp.status !== 200){
          throw new Error("get info failed:" + resp.body.msg);
        }
        this.SetProductdetailInfo(resp.body ?? {} as ProductdetailInfo);
        sessionStorage.setItem('product_detail',JSON.stringify(this.productdetailInfo));
        return resp.body ?? {} as Api.ProductdetailResponse;
      })
    )
  }


  SetProductBrandsInfo(info: ProductBrandsInfo): void{
    sessionStorage.setItem('product_brands',JSON.stringify(info))
  }
  GetProductBrandsInfo():ProductBrandsInfo{
    return this.productBrandsInfo;
  }
  GetLastProductBrandsInfo():Observable<ProductBrandsInfo>{
    return this.httpClient.get<any>(Api.ProductBrandsURL,{observe:'response'}).pipe(
      map((resp)=>{
        if (resp.status !== 200){
          throw new Error ("get info failed:" + resp.body.msg);
        }
        this.SetProductBrandsInfo(resp.body ?? {} as ProductBrandsInfo );
        sessionStorage.setItem('product_detail',JSON.stringify(this.productBrandsInfo));
        return resp.body ?? {} as Api.ProductBrandsResponse;
      })
    )
  }



  //直接获取
   GetMyAddr(){
    return this.httpClient.get(MyAddr.MyAddrURL).pipe(
      catchError(this.errServ.handleError('GetMyAddr', {}, MyAddr)) 
    )
  }



}
