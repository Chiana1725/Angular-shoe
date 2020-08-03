import { Component, OnInit, Input  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';//---i18n

@Component({
  selector: 'app-commodity-info',
  templateUrl: './commodity-info.component.html',
  styleUrls: ['./commodity-info.component.scss']
})
export class CommodityInfoComponent implements OnInit {
  @Input() Orderslist: any;
  
  languageBtn;//---i18n
  language;//---i18n
  imgBox;
  imgbox;
  constructor(
    public translateService: TranslateService //---i18n
  ) { }

  ngOnInit(): void {
       /* --- set i18n begin -------i18n*/
       this.translateService.addLangs(['en']);
       this.translateService.setDefaultLang('en');
       const browserLang = this.translateService.getBrowserLang();
       this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
       /* --- set i18n end -------i18n*/

       console.log(JSON.stringify(this.Orderslist)+"什么贵");
       let listsTxt = JSON.stringify(this.Orderslist);
       console.log(JSON.parse(listsTxt));
       this.imgBox = JSON.parse(listsTxt).image;
       console.log(this.imgBox);

      //  for (let i = 0; i < this.imgBox.length; i++) {
      //   this.imgBox[i].image = JSON.parse(this.imgBox[i].image);
      //   console.log(this.imgBox[i].image);
      //   this.imgbox = this.imgBox[i].image;
      //   console.log(this.imgbox.img1);
      //   this.Orderslist.push(this.imgbox.img1)
      //   console.log(this.Orderslist);
      //  }

  }

}
