import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';//---i18n
@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  @Input() orderslist: any;
  languageBtn;//---i18n
  language;//---i18n

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

      console.log(this.orderslist+"是你吗");
      console.log("红红火火恍恍惚惚")
  }

  subtotal(){
  let subtotal = this.orderslist.amount - this.orderslist.shipCost;
  return subtotal;
  }

}
