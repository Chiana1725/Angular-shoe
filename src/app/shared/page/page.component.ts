import { HttpResponse } from '@angular/common/http';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';//---i18n
import { Router, ActivatedRoute, } from '@angular/router';
import { ComService } from 'src/app/core/com.service';
import { ShopService, ProductlistInfo } from './../../core/services/shop.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  //产品总数
  @Input() total: number;
  //当前的页码
  @Input() currentPage :number;
  //每页显示个数
  @Input() pageItems :number =5  ;

  //显示的页码数组
  _pages = [];

  constructor(
    public translateService: TranslateService, //---i18n
    public com: ComService,
  ) { }

  ngOnInit(): void {
    /* --- set i18n begin -------i18n*/
    this.translateService.addLangs(['en']);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
    /* --- set i18n end -------i18n*/
    this.calcPage();

    console.log('cu',this.currentPage,this.total)
    
  }


  //计算页码并显示
  calcPage(){
    this._pages =[];
    let _pages = Math.ceil(this.total /this.pageItems);
    for(var i=1;i<=_pages;i++){
      this._pages.push(i);
    }
  }

  

}
