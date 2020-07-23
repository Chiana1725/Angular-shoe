import { HttpResponse, HttpParams } from '@angular/common/http';
import { orders } from './../../shared/lists';
import { ComService } from 'src/app/core/com.service';
import { Component, OnInit } from '@angular/core';
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

  //绑定模型用的变量
  news = [];

  navrouter = ['Order Form'];

  myorderInfo: MyorderInfo;
  arr;
  shoesGoods;
  shoesgoods;

  currentPage;

  res;


  // shoesoder = orders.orders;
  // arr = orders.orders.length;

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
    // this.arr = this.myorderInfo.orders;

    // console.log(this.arr)
    // if(this.arr==0){
    //   console.log("无数据")
    //   this.shownone = true;
    // }else if (this.arr>0){
    //   this.showhave = true;
    //   console.log("有数据")
    // }


    this.myorderInfo = this.orderService.GetMyorderInfo();
    console.log(this.myorderInfo);
    this.shoesGoods = this.myorderInfo.orders;
    console.log(this.shoesGoods);
    for (let i = 0; i < this.shoesGoods.length; i++) {
      this.shoesGoods[i].goods = JSON.parse(this.shoesGoods[i].goods);
      console.log(this.shoesgoods);
    }




    //改变状态将导航到不同数据
    this.route.paramMap.subscribe(params => {
      let state = +params.get('state') || 10;
      let post = { state: state };
    })
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

  routestate(e) {
    let state = this.route.snapshot.paramMap.get("state");
    this.com.httpGet('/api/order/my-orders', { state }).subscribe((res) => {
      console.log(state);//有问题
      this.res = res;
      this.myorderInfo = this.res;
      this.shoesGoods = this.myorderInfo.orders;
      for (let i = 0; i < this.shoesGoods.length; i++) {
        this.shoesGoods[i].goods = JSON.parse(this.shoesGoods[i].goods);
      }
    },
      (err: Error) => {
        alert(err.message);
      })
  }



  pageOrder(e) {
    // let params = new HttpParams;
    // params = params.append("len","5").append("state","-1").append("page","1");
    // this.com.httpGet('/api/order/my-orders' + params).subscribe((res) => {
    //   console.log(res);
    // })

  }



}
