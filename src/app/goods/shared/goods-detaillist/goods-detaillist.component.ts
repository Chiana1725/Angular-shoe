import { Component, OnInit } from '@angular/core';
import { lists } from './../../../shared/lists';
import { ShopService, ProductlistInfo } from './../../../core/services/shop.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-goods-detaillist',
  templateUrl: './goods-detaillist.component.html',
  styleUrls: ['./goods-detaillist.component.scss']
})
export class GoodsDetaillistComponent implements OnInit {

  detail;

  public show:boolean = false;
  public buttonName:any = 'Show';

  shoeslist = lists;
  productlistInfo : ProductlistInfo

  constructor( 
    private shopservice :ShopService,
    private route: ActivatedRoute,
    private router: Router
    ) { 

  }

  ngOnInit(): void {
    this.productlistInfo = this.shopservice.GetProductlistInfo()
    // console.log(this.productlistInfo.products);

  }

  toggle(){
    this.show = !this.show;
    if(this.show)
    this.buttonName = "Hide";
    else
    this.buttonName = "Show";
  }

  showAlert(){
  }

  
}
