import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';//---i18n

@Component({
  selector: 'app-logistics-details',
  templateUrl: './logistics-details.component.html',
  styleUrls: ['./logistics-details.component.scss']
})
export class LogisticsDetailsComponent implements OnInit {

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
  }

}
