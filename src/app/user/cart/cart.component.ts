import { Component, OnInit } from '@angular/core';
import { OrderService, MyAddrInfo } from './../../core/services/order.service';
import { ShopService } from './../../core/services/shop.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';//---i18n
import { CartService } from './../../core/services/cart.service';
import { ComService } from 'src/app/core/com.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  contrastdata;
  languageBtn;//---i18n
  language;//---i18n
  myaddr: any; //动态数据--地址
  myAddr: MyAddrInfo;
  cartlist: any; //商品动态
  changenum;
  productlist: any;
  number;
  sum;
  allsum;
  selected = false;                       // 同意协议
  isShown: boolean;
  isHide: boolean;
  
  freight;

  

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

    const goodInfoText = window.localStorage.getItem('cart_lists');
    console.log(goodInfoText);
    this.productlist = goodInfoText;
    console.log(this.productlist);
    console.log(JSON.parse(this.productlist));
    this.cartlist = JSON.parse(this.productlist);

    if (this.cartlist == null) {
      this.isShown = false;
      this.isHide = true;
      
    }else if (this.cartlist == 0){
      this.isHide = true;
      this.isShown = false;
    }else{
      this.isHide = false;
      this.isShown = true;
    }

    /*-------地址-------*/
    this.myAddr = this.orderService.GetMyAddrInfo();
    // console.log(this.myAddr.data[0]);
    this.myaddr = this.myAddr.data[0];
    // console.log(this.myaddr);

    // console.log(this.total())
    this.sum = this.total();

    /* --- set i18n begin -------i18n*/
    this.translateService.addLangs(['en']);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
  
    this.PostCalcshipfee();
    this.delGoods;

  }

  PostCalcshipfee(){

    let  postfee = {
      addr: this.myaddr.streetAddress,
      city: this.myaddr.city,
      country: this.myaddr.country,
      goods: this.cartlist,
      postCode: this.myaddr.postCode,
      state: this.myaddr.state,
    }
    this.cartSer.postCalcshipfee(postfee).subscribe(
      (res) => {
        // console.log(JSON.stringify(res) +"运费");
        let Freight = JSON.stringify(res);
        // console.log(JSON.parse(Freight));
        this.freight = JSON.parse(Freight);
      }
    )

  }


  delGoods (i) {
    this.cartlist.splice(i, 1);
    this.contrastdata = JSON.parse(localStorage.getItem('cart_lists'));
    console.log(this.contrastdata+"火火火");
    console.log(JSON.stringify(this.cartlist+"删除第一步"));
    localStorage.setItem('cart_lists',JSON.stringify(this.cartlist))
   
  }

  select() {
    this.selected = !this.selected;
    // console.log(this.selected);
  }

  openclause() {//提交付款
 

    let fileInput = document.getElementById('select');
    // console.log(fileInput);

    // console.log(this.cartlist);

    let post = {
      addr: this.myaddr.streetAddress,
      amount: this.allsum,//之后改
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
      (res) => {
        JSON.stringify(res);
        // console.log(JSON.stringify(res)+"订单号")
        let idText = JSON.stringify(res);
        // console.log(JSON.parse(idText));
        let idorder = JSON.parse(idText);
        let id =  idorder.orderId
        this.router.navigate(['/user/orderdetail/'+id]);
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
        // console.log(sum);
      }
      return sum;
    }
  }
  Alltotal(){
   this.allsum = this.sum+this.freight?.amount;
   return this.allsum ; 
  }

  changecount() {
    // console.log(this.cartlist[i].count);
  }


}

