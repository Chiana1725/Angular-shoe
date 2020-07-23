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

  public domain: string ='';//通过服务传静态
  private productId:number;
  languageBtn;//---i18n
  language;//---i18n


  isLoggedIn = false;


  public show:boolean = false;
  public buttonName:any = 'Show';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public translateService: TranslateService, //---i18n
    public com: ComService, 
    private http: HttpClient,
    public shopSer: ShopService,
    public orderSer: OrderService,
    public authSer: AuthService,
  ) {
    this.domain= this.com.domain;
   }


  ngOnInit(): void {
    
      this.route.params.subscribe(
        (params:Params)=>this.productId=params["pid"]);

       /* --- set i18n begin -------i18n*/
       this.translateService.addLangs(['en']);
       this.translateService.setDefaultLang('en');
       const browserLang = this.translateService.getBrowserLang();
       this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
       /* --- set i18n end -------i18n*/

      let pid=this.route.snapshot.paramMap.get("pid");

      //模仿直接获取路由
      this.route.params.subscribe(
        (value:any) => {
        this.requestContent(value.pid);
        console.log(value.pid+"我是页码");
      }
      );


    }

    requestContent(pid){

      // if(this.isLoggedIn = false){
      //   this.router.navigate(['/auth/login']);
      // }else if(this.isLoggedIn = true){
      //   var api = 'api/product/product-units?pid='+pid;
      //   this.com.get(api).then((response:any)=>{
      //     console.log(response);
      //     this.ProductdetailURL = response;
      //     console.log(ProductdetailURL);
      //     console.log(this.ProductdetailURL.data);//有问题
      //     this.lists = this.ProductdetailURL.data;   
      //     this.currenGoods = this.lists[0];
      //      this.switchGood(0);
      //     },
      //   )
      // }
      console.log("哈哈哈")

      //未登录跳转登录
      var api = 'api/product/product-units?pid='+pid;
      this.com.get(api).then((response:any)=>{
        console.log(response);
        this.ProductdetailURL = response;
        console.log(ProductdetailURL);
        console.log(this.ProductdetailURL.data);//有问题
        this.lists = this.ProductdetailURL.data;   
        this.currenGoods = this.lists[0];
         this.switchGood(0);
        },
      )

    }


    getImgPath(path){
      console.log(path);
      return (JSON.parse(path))['img1'];
     
    }



    switchGood(index:number){
      this.currenGoodsInfo = this.lists[index];
      console.log(this.currenGoodsInfo);
      this.currenGoods = this.currenGoodsInfo;
      let sizes = JSON.parse(this.currenGoods.specs).sizes;
      this.size = sizes.size.split(',');
      console.log(this.size);

    }

  
  
    getSize(i){
      console.log(this.currenGoods+"之前的");
      console.log(i);
      console.log(this.size[i]);
      let changesize = this.size[i];
      this.currenGoods['size'] = changesize;
      console.log(this.currenGoods);
    }




}
