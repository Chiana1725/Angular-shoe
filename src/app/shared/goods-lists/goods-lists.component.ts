import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ComService } from 'src/app/core/com.service';
import { ShopService ,ProductlistInfo} from './../../core/services/shop.service';
import { TranslateService } from '@ngx-translate/core';//---i18n
import { lists, products } from './../lists';

@Component({
  selector: 'app-goods-lists',
  templateUrl: './goods-lists.component.html',
  styleUrls: ['./goods-lists.component.scss']
})
export class GoodsListsComponent implements OnInit {


  @Input() paid: boolean = false; //
  @Input() detail :any ;//shangp

  public domain: string = '';//通过服务传静态

  // shoeslist = lists;//静态数据源
  // detail =[];//动态数据源
  // detail : ProductlistInfo;//动态数据源
  images:string;

  selectedId: number;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public com: ComService,
    public shopSer: ShopService,
    public translateService: TranslateService, //---i18n
  ) {
    // this.shoeslist= this.com.domain;
  }



  ngOnInit(): void {
    /* --- set i18n begin -------i18n*/
    this.translateService.addLangs(['en']);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
    /* --- set i18n end -------i18n*/





    /*------动态传值------
    this.detail = this.shopSer.GetProductlistInfo();
    console.log(this.detail.products);
    console.log(this.detail.products[0]);
    console.log(this.detail.products[0].images);*/
    // console.log(JSON.parse(this.detail.products[0].images));
    // const products = JSON.parse(this.detail.products[0].images);
    // console.log(products.img1);
   /* let  image = products;
    console.log(image)
    ------动态传值------*/
  }
  func(path){
    return JSON.parse(path).img1;

  }

}
 