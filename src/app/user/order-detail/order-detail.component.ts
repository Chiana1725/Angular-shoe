import { style } from '@angular/animations';
import { ComService } from 'src/app/core/com.service';
import { Component, OnInit, Input, Output, EventEmitter, ɵɵresolveBody } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';//---i18n
import { myAddr, lists, orders } from './../../shared/lists';
import { Router, ActivatedRoute } from '@angular/router';  // 用于获取路由参数
import { ShopService } from './../../core/services/shop.service';
import { OrderService } from './../../core/services/order.service';
import { AuthService } from './../../core/services/auth.service';
import { debugPort } from 'process';

@Component({
  selector: 'ngbd-modal-content',
  template: `
  <div style="margin-top:100px">
  <div class="tanchuanBox">
  <h1>{{id}}</h1>
   <h1 class="tanchuanBT">Commodity terms and Disclaimer</h1>
    <div class="overflow">
      <h4>Tip: you are shopping on online overseas websites </h4>
      <ul >
        <li>Your cross-border consumption behavior is in line with the electricity business law and relevant international conventions.</li>
        <li>The overseas purchase shop includes tens of millions of products, all of which are on sale on Vanice's overseas website, and there is no need to transfer or purchase on behalf of others.</li>
        <li>When relevant conditions are met (sole stain / wear is not supported), consumers can apply for "seven days no reason to return and exchange goods".</li>
        <li>The estimated delivery time is only for reference. The actual delivery is affected by force majeure factors such as customs clearance or weather. You can track the package in "my order" to check the delivery status. If you have any questions, please contact customer service.</li>
        <li>At present, overseas purchased goods do not support night delivery, scheduled delivery, self delivery and other services.</li>
        <li>If the total amount of qualified goods is lower than the freight free standard due to the cancellation or return of goods due to the customer's reason, 5 yuan or 10 yuan delivery fee.</li>
        <li>Vanice will not ask for your bank card number, verification code and other information for any reason.If any lawless person pretends to be Vanice's overseas purchasing customer service and asks for your bank account number and other information, please contact Vanice's overseas purchasing customer service or call the police in time, please be vigilant.</li>
        <li>The commodities purchased by consumers are only for personal use, and the purchase behavior must follow the principle of self use and reasonable quantity, and shall not be converted to other commercial purposes, and shall not be re sold.</li>
        <li>Vanice will not be responsible for any delay in delivery due to customer's change of the recipient's name or address and failure to complete this additional service in a timely manner.</li>
        <li>Vanice will not be responsible for any delay or damage caused by natural disaster, political factors, labor tide, nuclear explosion or war.</li>
        <li>Vanice reserves the right of final interpretation.</li>
        <li class="sp">Click to Pay and agree service Agreement:</li>
      </ul>
    </div>
    <button type="submit" class="tanchuanButton " (click)="toggle()"  >Agree and pay</button>
    <button type="submit" class="tanchuanButton " (click)="activeModal.close('Close click')"  >Cancel</button>
    
  </div> 
  </div>
  `,
  styleUrls: ['./order-detail.component.scss']
})
export class NgbdModalContent {
  orderslist;
  Orderslist;
  Id;
  payDataInfo;
  uri;

  @Input() name;
  @Input() id;

  @Input() details = lists;
  @Input() close = close;
  @Input() openpay: any;

  constructor(
    public activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    public com: ComService,
    public orderSer: OrderService,
  ) { }
  ngOnInit(): void {
    console.log("coco");
    console.log(this.id+"是这个id吗");
    let id = this.route.snapshot.paramMap.get("id");
    // modalRef.compoentInst
  }
 

  private activeLink: string = 'default-active-link';

  toggle(){
    this.openpay();
  }
 
}



@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

 

  languageBtn;//---i18n
  language;//---i18n

  newsDetailData = null;
  newsUrl = null;

  myaddr: any; //动态数据
  addrDate;
  orderslist;
  Orderslist;

  payId;
  selected = false;

  payUrlInfo;
  payDataInfo;
  uri;
  declareForm = this.payDataInfo;
  constructor(
    private router: Router,
    private modalService: NgbModal,
    public translateService: TranslateService,//---i18n
    private route: ActivatedRoute,
    private shopSer: ShopService,
    public com: ComService,
    public orderSer: OrderService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    /* --- set i18n begin -------i18n*/
    this.translateService.addLangs(['en']);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
    /* --- set i18n end -------i18n*/

    /*---------地址---------*/
    const addr = window.localStorage.getItem('my_addr');
    console.log(addr + "我的地址正确显示");
    console.log(addr)
    this.myaddr = JSON.parse(addr);
    this.addrDate = this.myaddr.data;
    console.log(this.addrDate);
    /*---------地址---------*/

    //  this.showNewsDetailData();
    let id = this.route.snapshot.paramMap.get("id");
    this.com.httpGet('api/order/detail', { id }).subscribe((res) => {
      console.log(JSON.stringify(res));
      let detailData = JSON.stringify(res);
      console.log(JSON.parse(detailData));
      console.log(id);
      this.payId = id;
      this.orderslist = res;
      console.log(this.orderslist.goods)
      this.Orderslist = this.orderslist.goods;
    })
  }

  select() {
    this.selected = !this.selected;
    console.log(this.selected);
  }


  openclause() {
    this.com.isShowDeclare =  true;
    this.selected = true;
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }

  openpay(){
      this.com.httpGet('/api/order/pay-order', { id: this.payId },
      "body", "text").subscribe((res: string) => {
        document.open();
        document.write(res);
        document.close();
      }, (err) => {
        console.error(err);
      });  
  }


  goback(){
    
  }

}
