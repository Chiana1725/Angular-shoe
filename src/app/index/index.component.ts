import { products } from './../shared/lists';
import { ComService } from 'src/app/core/com.service';
import { Observable } from 'rxjs';
import { ShopService } from './../core/services/shop.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  products;

  constructor(
    private shopService: ShopService,
    public router: Router,
    private com: ComService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.shopService.GetLastProductlistInfo().subscribe(
      (data) => this.products = data
    );

    this.getHotData();

  }

  imgs=[
    'assets/images/shuffling1.png',
    'assets/images/shuffling2.png',
  ]

  //请求热门数据
  getHotData() {
    this.com.httpGet('/api/product/all-products', { len: "10" },'response').subscribe(res => {
      let products = res.products;
      if(products){
        this.com.imgShow(products);
      }
      this.products = res;
    })
  }


}
