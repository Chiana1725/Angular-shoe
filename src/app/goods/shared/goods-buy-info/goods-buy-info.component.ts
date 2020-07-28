import { Component, OnInit, Input  } from '@angular/core';
// import { lists } from './../../../shared/lists';
import { TranslateService } from '@ngx-translate/core';//---i18n
import { ShopService ,ProductlistInfo} from './../../../core/services/shop.service';
import { ComService } from 'src/app/core/com.service';

@Component({
  selector: 'app-goods-buy-info',
  templateUrl: './goods-buy-info.component.html',
  styleUrls: ['./goods-buy-info.component.scss']
})
export class GoodsBuyInfoComponent implements OnInit {



  @Input() currenGoods: any;

  languageBtn;//---i18n
  language;//---i18n

  // details = lists;

  constructor(
    public com: ComService, //---i18n
    
  ) { }

  ngOnInit(): void {
    this.com.setLang();
    console.log('t',this.currenGoods)
  }

}
