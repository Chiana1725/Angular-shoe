import { Response } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';
import { OrderService, MyAddrInfo } from './../../core/services/order.service';
import { ShopService } from './../../core/services/shop.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';//---i18n
import { lists, myAddr, orders, products } from './../../shared/lists';
import { CartService } from './../../core/services/cart.service';
import { ComService } from 'src/app/core/com.service';
// @Component({
//   selector: 'ngbd-modal-content',
//   template: `
//   <div>
//   <div class="tanchuanBox">
//    <h1 class="tanchuanBT">Commodity terms and Disclaimer</h1>
//     <div class="overflow">
//       <h4>Tip: you are shopping on online overseas websites </h4>
//       <ul >
//         <li>Your cross-border consumption behavior is in line with the electricity business law and relevant international conventions.</li>
//         <li>The overseas purchase shop includes tens of millions of products, all of which are on sale on Vanice's overseas website, and there is no need to transfer or purchase on behalf of others.</li>
//         <li>When relevant conditions are met (sole stain / wear is not supported), consumers can apply for "seven days no reason to return and exchange goods".</li>
//         <li>The estimated delivery time is only for reference. The actual delivery is affected by force majeure factors such as customs clearance or weather. You can track the package in "my order" to check the delivery status. If you have any questions, please contact customer service.</li>
//         <li>At present, overseas purchased goods do not support night delivery, scheduled delivery, self delivery and other services.</li>
//         <li>If the total amount of qualified goods is lower than the freight free standard due to the cancellation or return of goods due to the customer's reason, 5 yuan or 10 yuan delivery fee.</li>
//         <li>Vanice will not ask for your bank card number, verification code and other information for any reason.If any lawless person pretends to be Vanice's overseas purchasing customer service and asks for your bank account number and other information, please contact Vanice's overseas purchasing customer service or call the police in time, please be vigilant.</li>
//         <li>The commodities purchased by consumers are only for personal use, and the purchase behavior must follow the principle of self use and reasonable quantity, and shall not be converted to other commercial purposes, and shall not be re sold.</li>
//         <li>Vanice will not be responsible for any delay in delivery due to customer's change of the recipient's name or address and failure to complete this additional service in a timely manner.</li>
//         <li>Vanice will not be responsible for any delay or damage caused by natural disaster, political factors, labor tide, nuclear explosion or war.</li>
//         <li>Vanice reserves the right of final interpretation.</li>
//         <li class="sp">Click to Pay and agree service Agreement:</li>
//       </ul>
//     </div>
//     <button type="submit" class="tanchuanButton" (click)="activeModal.close('Close click')" >Agree and pay</button>
//     <button type="submit" class="tanchuanButton" (click)="activeModal.close('Close click')" >Cancel</button> 
//   </div> 
//   </div>
//   `,
//   styleUrls: ['./cart.component.scss']
// })
// export class NgbdModalContent {
//   @Input() orders: any;
//   @Input() details = lists;
//   @Input() close = close;
//   constructor(
//     public activeModal: NgbActiveModal,
//     public translateService: TranslateService,
//     private router: Router,
//   ) {
//   }
//   ngOnInit(): void {
//   }
//   private activeLink: string = 'default-active-link';
// }


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  languageBtn;//---i18n
  language;//---i18n
  myaddr: any; //动态数据--地址
  myAddr: MyAddrInfo;
  cartlist: any; //商品动态
  changenum;
  productlist: any;
  number;
  sum;
  selected = false;                       // 同意协议
  isShown: boolean;

  

  array = [1, 2, 3, 4, 5];

  constructor(
    private router: Router,
    public shopService: ShopService,
    public orderService: OrderService,
    private modalService: NgbModal,
    public translateService: TranslateService, //---i18n
    public cartSer: CartService,
    private com: ComService,
  ) {

  }

  ngOnInit(): void {
     
    // this.cartSer.postCalcshipfee(this.post).subscribe(
    //   () => {
    //     console.log("危机感");
    //   }
    // );
    // this.com.httpPost('/api/order/calc-ship-fee',this.post);
    // setTimeout(() => {
    //   console.log("危机危机危机")
    // }, 1000);


    const goodInfoText = window.localStorage.getItem('cart_lists');
    console.log(goodInfoText);
    this.productlist = goodInfoText;
    console.log(this.productlist);
    console.log(JSON.parse(this.productlist));
    this.cartlist = JSON.parse(this.productlist);

    if (this.cartlist == null) {
      this.isShown = false;
    }

    /*-------地址-------*/
    this.myAddr = this.orderService.GetMyAddrInfo();
    console.log(this.myAddr.data[0]);
    this.myaddr = this.myAddr.data[0];
    console.log(this.myaddr);

    console.log(this.total())
    this.sum = this.total();

    /* --- set i18n begin -------i18n*/
    this.translateService.addLangs(['en']);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
  
    

  }

  PostCalcshipfee(){

 

  }

  // total() {
  //   if (this.cartlist == null){
  //     this.isShown = false;
  //   }
  //   else if(this.cartlist != null){
  //     this.isShown = true;
  //     let sum = 0;

  //     for (let i = 0; i < this.cartlist.length; i++) {
  //       sum += this.cartlist[i].price * this.cartlist[i].count * (1-this.cartlist[i].discount);
  //       console.log(sum);
  //     }
  //     return sum;
  //   }

  // }

  delGoods (i) {
    this.cartlist.splice(i, 1);
    var contrastdata = JSON.parse(localStorage.getItem('cart_lists'));
    localStorage.setItem('cart_lists',JSON.stringify(this.cartlist))
  
  }

  select() {
    this.selected = !this.selected;
    console.log(this.selected);
  }

  openclause() {//提交付款
    let  postfee = {
      addr: this.myaddr.streetAddress,
      city: this.myaddr.city,
      country: this.myaddr.country,
      goods: this.cartlist,
      postCode: this.myaddr.postCode,
      state: this.myaddr.state,
    }
    this.cartSer.postCalcshipfee(postfee).subscribe(
      () => {
        console.log("222222222222222222")
      }
    )
    // if(this.selected){

    let fileInput = document.getElementById('select');
    console.log(fileInput);

    console.log(this.cartlist);

    let post = {
      addr: this.myaddr.streetAddress,
      amount: this.sum,//之后改
      city: this.myaddr.city,
      country: this.myaddr.country,
      coupons: "222222222",//优惠券
      goods: this.cartlist,
      phone: this.myaddr.phone,
      postCode: this.myaddr.postCode,
      receiver: this.myaddr.firstName + this.myaddr.lastName,
      state: this.myaddr.state,
    }


    this.orderService.CreateOrder(post).subscribe(
      () => {
        console.log()
        this.router.navigate(['/user/orderform/0/1']);
      }
    )
    this.cartSer.clearCart();

   
  }




  //改变数量
  countChange(e, i) {
    this.cartlist[i].count = +e.target.value;
    this.sum = this.total();
  }



  total() {
    if (this.cartlist == null) {
      this.isShown = false;
    }
    else if (this.cartlist != null) {
      this.isShown = true;
      let sum = 0;

      for (let i = 0; i < this.cartlist.length; i++) {
        // this.cartlist[i].count = this.changenum;
        sum += this.cartlist[i].price * this.cartlist[i].count * (1 - this.cartlist[i].discount);
        console.log(sum);
      }
      return sum;
    }

  }
  changecount() {
    // console.log(this.cartlist[i].count);
  }
  //  else{//打开弹窗
  //   const modalRef = this.modalService.open(NgbdModalContent);
  //   modalRef.componentInstance.name = 'World';
  //   this.selected = true;
  // }
  // }

  // openwindow(){
  //   const modalRef = this.modalService.open(NgbdModalContent);
  //   modalRef.componentInstance.name = 'World';
  // }

}

