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

  num = 0;
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
  constructor(
    private route: ActivatedRoute,
    public com: ComService, 
    private router: Router,
    public orderSer: OrderService,
    public cartSer: CartService,
  ) {

   }

  ngOnInit(): void {
    
  }
  changecount(e){
    console.log(e);
    // this.num = +e.target.value;
  }
  add(){
    this.num++;
  }
  minus(){
    if (this.num>0){
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
    goods["size"] = this.currenGoods.size;
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
          this.router.navigate(['/user/cart']);
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

  countChange(e, ) {
    this.num = +e.target.value;
  
  }

}
