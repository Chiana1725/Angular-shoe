import { ComService } from 'src/app/core/com.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, } from '@angular/router';
import { OrderService, MyorderInfo  } from '../../../core/services/order.service';


@Component({
  selector: 'app-side-tab',
  templateUrl: './side-tab.component.html',
  styleUrls: ['./side-tab.component.scss']
})
export class SideTabComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private com:ComService
  ) { }

  orderformForm:FormGroup;

  ngOnInit(): void {
    
  }

  openOrder():void{
    this.orderService.GetLastMyorderInfo().subscribe(
      () => {
        this.router.navigate(['/user/orderform/-1']);
        console.log("给我打印出来")
      },
      (err:Error) => {
        alert(err.message);
      }
    )
    // this.orderService.getAllOrders
  }


  

}
