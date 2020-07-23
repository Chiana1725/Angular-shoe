import { Component, OnInit, Input  } from '@angular/core';
// import { lists } from './../../../shared/lists';
import { TranslateService } from '@ngx-translate/core';//---i18n
import { ShopService ,ProductlistInfo} from './../../../core/services/shop.service';

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
    public translateService: TranslateService, //---i18n
    
  ) { }

  ngOnInit(): void {
       /* --- set i18n begin -------i18n*/
       this.translateService.addLangs(['en']);
       this.translateService.setDefaultLang('en');
       const browserLang = this.translateService.getBrowserLang();
       this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
       /* --- set i18n end -------i18n*/
  }

}
