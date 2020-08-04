import { HttpResponse, HttpParams } from '@angular/common/http';
import { orders } from './../../shared/lists';
import { ComService } from 'src/app/core/com.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NavroutingService } from './../../core/services/navrouting.service';
import { OrderService, MyorderInfo } from './../../core/services/order.service';

// import { orders } from '../../shared/lists';//模拟数据

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  @Output() submitSearchContent = new EventEmitter<any>();
  orderslist;
  //绑定模型用的变量
  news = [];
  navrouter = ['Order Form'];
  myorderInfo: any;
  Orderslist;
  arr;
  shoesGoods;
  shoesgoods;
  currentPage;
  res;

  payId;
  btn1;
  btn2;
  btn3;

  showhave: boolean = true;
  shownone: boolean = false;
  state: number;//当前状态码
  status = '2';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navroutingService: NavroutingService,
    private orderService: OrderService,
    private com: ComService,
  ) {

    navroutingService.missionAnnounced$.subscribe(
      navrouter => {
      }
    )
  }

  orderformForm: FormGroup;
  ngOnInit(): void {
    this.routestate();
  }

  openOrder(): void {
    this.orderService.GetLastMyorderInfo().subscribe(
      () => {
        this.router.navigate(['/user/orderform']);
        console.log("给我打印出来")
      },
      (err: Error) => {
        alert(err.message);
      }
    )
  }

  orderform() {

  }

  routestate() {
  
    this.route.params.subscribe(p=>{
      let state = p.state;
      let page = p.page;
      this.com.httpGet1('/api/order/my-orders', { state, sort:"true", len:"5", page:page, }).subscribe((res) => {
        this.res = res;
        // console.log(res);
        this.myorderInfo = this.res;
        this.myorderInfo.total = this.res.orders.length;
        // console.log(this.myorderInfo);
        this.shoesGoods = this.myorderInfo.orders;

        for (let i = 0; i < this.shoesGoods.length; i++) {
          this.shoesGoods[i].goods = JSON.parse(this.shoesGoods[i].goods);
          console.log(this.shoesGoods[i].state);
          console.log("我就试试"+ this.shoesGoods[i].id);
          this.payId = this.shoesGoods[i].id;

          if(this.shoesGoods[i].state == 32){
            this.btn1 = "待支付";
            this.btn2 = "立即付款";
            this.btn3 = "取消订单";
          }else if(this.shoesGoods[i].state == 1){
            this.btn1 = "已发货";
            this.btn2 = "确认收货";
            this.btn3 = "查看物流";
          }else if(this.shoesGoods[i].state == 3){
            this.btn2 = "交易关闭";
          }else if(this.shoesGoods[i].state == 7){
            // this.btn1 = "交易成功";
            this.btn2 = "交易关闭";
            // this.btn3 = "查看物流";
          }else if(this.shoesGoods[i].state == 9){
            this.btn1 = "已发货";
            this.btn2 = "申请退款";
            this.btn3 = "查看物流";
          }else if(this.shoesGoods[i].state == 11){
            this.btn1 = "已确认收货";
            this.btn2 = "申请退款";
            this.btn3 = "查看物流";
          }else if(this.shoesGoods[i].state == 15){
            this.btn1 = "未发货";
            this.btn2 = "已退款";
            this.btn3 = "查看物流";
          }else if(this.shoesGoods[i].state == 17){//有毛病
            this.btn1 = "已退款";
            this.btn2 = "输入快递单号";
            this.btn3 = "查看物流";
          }else if(this.shoesGoods[i].state == 19){//有毛病
            this.btn1 = "已退款";
            // this.btn2 = "对方确认收货";
            this.btn3 = "查看物流";
          }else if(this.shoesGoods[i].state == 23){//有毛病
            this.btn1 = "已退款";
            // this.btn2 = "对方已确认收货";
            this.btn3 = "查看物流";
          }


        }
      },
        (err: Error) => {
          alert(err.message);
        })
    })
    
  }

  Operate(){
    this.com.httpGet('/api/order/pay-order', { id: this.payId}, "body", "text").subscribe((res: string) => {
      document.open();
      document.write(res);
      document.close();
    }, (err) => {
      console.error(err);
    });
  }



  getPages(e){
    for(const item of e){
      item.goods = JSON.parse(item.goods);
      console.log(item.goods);
    }
  }


  pageOrder(e) {
  }



}
