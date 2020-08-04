import { Response } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { ComService } from 'src/app/core/com.service';
import { OrderService } from './../../../core/services/order.service';
import { CartService } from './../../../core/services/cart.service';
@Component({
  selector: 'app-goods-pay',
  templateUrl: './goods-pay.component.html',
  styleUrls: ['./goods-pay.component.scss']
})
export class GoodsPayComponent implements OnInit {
  @Input() currenGoods: any ;
  @Input() size ;
  myAddr;
  myaddr: any; //动态数据--地址
  freight;
  num = 1;
  id;
  name;
  goodsCart: any;
  cart_product = [];
  ProductdetailURL; //动态
  goods;
  goodsData;
  productName;
  price;
  subject;
  jd;
  zk;
  js;
  constructor(
    private route: ActivatedRoute,
    public com: ComService, 
    private router: Router,
    public orderSer: OrderService,
    public cartSer: CartService,
  ) {

   }

  ngOnInit(): void {
    this.myAddr = window.localStorage.getItem('my_addr');
    console.log(JSON.parse(this.myAddr).data[0]);
    this.myaddr = JSON.parse(this.myAddr).data[0];
  
    
  }
  changecount(e){
    console.log(e);
    // this.num = +e.target.value;
  }
  add(){
    this.num++;
  }
  minus(){
    if (this.num>1){
      this.num--;
    }
  }

  addCart():void{



    let goods = {};
    goods["count"] = this.num;
    goods["id"] = this.currenGoods.id;
    goods["image"] = this.currenGoods.images;
    goods["name"] = this.currenGoods.productName;
    goods["price"] = this.currenGoods.price;
    goods["size"] =   this.currenGoods.size;
    goods["stockId"] = "999";//之后改
    goods["subject"] = this.currenGoods.subject;
    goods["discount"] = this.currenGoods.discount;

    this.cartSer.addGoodToCart(goods);


    this.route.params.subscribe((value:any) => {

      this.requestContent(value.pid)
      console.log(value);
      console.log(value.pid+"我是页码");
      this.id = value.pid;
      this.orderSer.GetLastMyAddrInfo().subscribe(
        (info) => {
          // this.router.navigate(['/user/cart']);
          alert("已加入购物车")
        },
        (err:Error) => {
          // alert(err.message);
          this.router.navigate(['/auth/login']);
        }
      )
    });
  }
  requestContent(pid){
    var api = 'api/product/product-units?pid='+pid;
    this.com.get(api).then((response:any)=>{
      console.log(response);
      this.ProductdetailURL = response;
      console.log(this.ProductdetailURL.data[0]);//等下改
      this.currenGoods = this.ProductdetailURL.data[0];
      console.log(this.currenGoods);
      localStorage.setItem("cart_product",JSON.stringify(this.currenGoods));
    })
  }

  addOrder(){

    let goods = {};
    goods["count"] = this.num;
    goods["id"] = this.currenGoods.id;
    goods["image"] = this.currenGoods.images;
    goods["name"] = this.currenGoods.productName;
    goods["price"] = this.currenGoods.price;
    goods["size"] =   this.currenGoods.size;
    goods["stockId"] = "999";//之后改
    goods["subject"] = this.currenGoods.subject;
    goods["discount"] = this.currenGoods.discount;


    let  postfee = {
      addr: this.myaddr.streetAddress,
      city: this.myaddr.city,
      country: this.myaddr.country,
      goods:[ goods ],
      postCode: this.myaddr.postCode,
      state: this.myaddr.state,
    }
    this.cartSer.postCalcshipfee(postfee).subscribe(
      (res) => {
        // console.log(JSON.stringify(res) +"运费");
        let Freight = JSON.stringify(res);
        console.log(JSON.parse(Freight));
        let freights = JSON.parse(Freight);

        this.freight = freights.amount;
        console.log(this.freight);
      }
    )


    this.zk = 1-this.currenGoods.discount;
    let jss = this.currenGoods.price.toFixed(2)*this.num*this.zk+this.freight;
    console.log(jss);
    let post = {
      addr: this.myaddr.streetAddress,
      amount: jss,// 100
      city: this.myaddr.city,
      country: this.myaddr.country,
      coupons: "222222222",//优惠券
      goods:[ goods ],
      phone: this.myaddr.phone,
      postCode: this.myaddr.postCode,
      receiver: this.myaddr.firstName + this.myaddr.lastName,
      state: this.myaddr.state,
    }
    this.orderSer.CreateOrder(post).subscribe(
      (res) => {
        JSON.stringify(res);
        console.log(JSON.stringify(res)+"订单号")
        let idText = JSON.stringify(res);
        // console.log(JSON.parse(idText));
        let idorder = JSON.parse(idText);
        let id =  idorder.orderId
        this.router.navigate(['/user/orderdetail/'+id]);
      }
    )
  }

  countChange(e, ) {
    this.num = +e.target.value;
  
  }

}
