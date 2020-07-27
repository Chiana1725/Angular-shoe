import { OrderService } from './../../core/services/order.service';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';//---i18n
import { Router, ActivatedRoute, } from '@angular/router';
import { ComService } from 'src/app/core/com.service';
import { ShopService, ProductlistInfo } from './../../core/services/shop.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {


  ProductlistURL;
  //假数据
  detail: ProductlistInfo;//动态数据源
  tableList;
  tablePageList = [];  //分页后前台显示数据
  pageNo = 1; //当前页码

  // preShow = false; //上一页
  // nextShow = true; //下一页
  preShow; //上一页
  nextShow; //下一页

  pageSize = 5; //单页显示数
  totalCount = 0; //总页数
  pageSizes = [5, 10, 15];
  curPage = 1; //当前页
  // pages = [1, 2, 3];
  //假数据



  currentPage = 0;
  currentRouter;


  @Input() Orderslist: any;

  @Input() page: number;
  @Input() last: number;
  //产品总数
  @Input() total: number;
  @Output() submitSearchContent = new EventEmitter<any>();


  pages = [];
  num = 5;


  languageBtn;//---i18n
  language;//---i18n

  constructor(
    public translateService: TranslateService, //---i18n
    private router: Router,
    private route: ActivatedRoute,
    public com: ComService,
    public orderService:OrderService
  ) { }

  ngOnInit(): void {
    /* --- set i18n begin -------i18n*/
    this.translateService.addLangs(['en']);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
    /* --- set i18n end -------i18n*/

    this.calcPage();
    
  }


  //计算页码并显示
  calcPage(){
    this.pages =[];
    //每页显示个数
    let pageItems = 2;
    let pages = Math.ceil(this.total /pageItems);
    for(var i=1;i<=pages;i++){
      this.pages.push(i);

      // this.preShow = i-1;
      // this.nextShow = i+1;
    }
    console.log('pages',this.pages);

  }

  // showPrePage(){

  // }

  //假数据
  getPageList() {
    if (this.detail && this.detail.products) {
      this.tableList = this.detail.products;
      if (this.tableList.length >= 1) {
        if (this.tableList.length % this.pageSize === 0) {
          this.pageNo = Math.floor(this.tableList.length / this.pageSize);
        } else {
          this.pageNo = Math.floor(this.tableList.length / this.pageSize) + 1;
        }
        if (this.pageNo < this.curPage) {
          this.curPage = this.curPage - 1;
        }
        if (this.pageNo === 1 || this.curPage === this.pageNo) {
          this.preShow = this.curPage !== 1;
          this.nextShow = false;
        } else {
          this.preShow = this.curPage !== 1;
          this.nextShow = true;
        }
      } else {
        this.tableList.length = 0;
        this.pageNo = 1;
        this.curPage = 1;
      }
      this.tablePageList = this.tableList.slice((this.curPage - 1) * this.pageSize, (this.curPage) * this.pageSize);
    }
  }
  //点击上一页方法
  showPrePage() {
    this.curPage--;
    if (this.curPage >= 1) {
      this.getPageList();
    } else {
      this.curPage = 1;
    }
  }
  //点击下一页方法
  showNextPage() {
    this.curPage++;
    if (this.curPage <= this.pageNo) {
      this.getPageList();
    } else {
      this.curPage = this.pageNo;
    }
  }
  //自定义跳页方法
  onChangePage(value) {
    if (value > this.pageNo) {
      confirm('超出最大页数');
    } else if (value <= 0) {
      this.curPage = 1;
      this.getPageList();
    } else {
      this.curPage = value;
      this.getPageList();
    }
  }
  //改变每页显示方法
  onChangePageSize(value) {
    this.pageSize = value;
    this.curPage = 1;
    this.getPageList();
  }


  getMyOders() {
    
  }

  setPage(page: number) {

    this.submitSearchContent.emit(page);

  }

}
