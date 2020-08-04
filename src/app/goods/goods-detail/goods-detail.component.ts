import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap ,Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TranslateService } from '@ngx-translate/core';//---i18n
import { ShopService, ProductdetailInfo } from './../../core/services/shop.service';
import { ComService } from 'src/app/core/com.service';
import { OrderService } from './../../core/services/order.service';
import { ProductdetailURL } from './../../shared/model';
import { AuthService } from './../../core/services/auth.service';
import { goodsDetail } from 'src/app/shared/lists';

@Component({
  selector: 'app-goods-detail',
  templateUrl: './goods-detail.component.html',
  styleUrls: ['./goods-detail.component.scss'],
  
})
export class GoodsDetailComponent implements OnInit {

  ProductdetailURL; //动态
  detailData: ProductdetailInfo;//动态获取详情
  lists;
  subject;
  imglists=[];//商品颜色图片
  colorlists;//颜色
  gendar;//性别
  size;//尺码
  currenGoodsInfo = {};
  currenGoods;
  products;
  public domain: string ='';//通过服务传静态
  private productId:number;
  languageBtn;//---i18n
  language;//---i18n
  activeIndex = 0;
  activeIndex1=0;

  isLoggedIn = false;


  public show:boolean = false;
  public buttonName:any = 'Show';
  constructor(
    private route: ActivatedRoute,
    public com: ComService, 
    public shopSer: ShopService,
    public orderSer: OrderService,
    public authSer: AuthService,
  ) {
   }
   

  ngOnInit(): void {
 
   
    this.com.setLang();

      //请求商品详情
      this.route.paramMap.subscribe((p)=>{
       let pid =  p.get('pid');
       if(pid){
        this.getDetail(pid);
       }
      })
      this.getHotData();

      // console.log(this.size[0]+"我是尺码尺码尺码")
      

    }

    getHotData() {
      this.com.httpGet('/api/product/all-products', { len: "10" },'response').subscribe(res => {
        let products = res.products;
        if(products){
          this.com.imgShow(products);
        }
        this.products = res;
      })
    }

    getDetail(pid){
      var api = 'api/product/product-units?pid='+pid;
      this.com.httpGet(api,null,'response','json',goodsDetail).subscribe(res=>{
        this.lists = res.data;
        
        //处理数据
        if( this.lists &&  this.lists.length){
          this.switchGood(0);
          this.com.imgShow(this.lists);
          // this.size[0];//尺码默认
          // this.activeIndex1 = 0;
        }
      })
      
    }


    getImgPath(path){
      console.log(path);
      return (JSON.parse(path))['img1'];
     
    }



    switchGood(index:number){
      this.currenGoodsInfo = this.lists[index];
      this.currenGoods = this.currenGoodsInfo;
      let sizes = JSON.parse(this.currenGoods.specs).sizes;
      this.size = sizes.size.split(',');  
      this.com.navArr=[{name:this.currenGoods.brandId,url:'/goods/list/'+this.currenGoods.brandId},{name:this.currenGoods.productName,url:this.route.url.toString()}]
      this.activeIndex1 = index;
      if(this.activeIndex1 = 0){
        this.currenGoods.size = this.size[0];//默认尺码
      }else{
        this.currenGoods.size = this.size[index];//选中尺码
      }
    }

  
  
    getSize(i){
      // console.log(this.currenGoods+"之前的");
      // console.log(i);
      // console.log(this.size[i]);
    
      let changesize =  this.size[i] ;
      this.currenGoods['size'] = changesize;
      // console.log(this.currenGoods);
      this.activeIndex1 = i;
      if (i= 0){
        changesize =  this.size[0] ;
      }
      console.log("0000000000000000000")
    }




}
