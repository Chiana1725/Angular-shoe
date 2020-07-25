import { products } from './../../shared/lists';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { lists } from '../../shared/lists';


//全局--跳转详情
import { ComService } from 'src/app/core/com.service';
@Component({
  selector: 'user-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {

  goodsList;
  pageList;

  // shoeslist = lists;
  public list:any[]=[];
  public order: any = {};
  page;//当前的页码


  constructor(
  public com : ComService,
  private route:ActivatedRoute, 
  public router: Router,
  ) { }

  ngOnInit(): void {
   
    let api = '/api/product/all-products';
    this.route.paramMap.subscribe((p:any)=>{     
        let brandId = p.get('brandId');
        //面包屑导航
        this.com.navArr=[{name:brandId + 'List',url:'/goods/list/'+brandId}];
        this.com.httpGet(api, {brandId}).subscribe(res=>{
          this.goodsList = res;
          console.log('goods',this.goodsList);
        })
    })
    

  }

  


  toProductDetail(){ 
   
  }

  

}
