import { ComService } from 'src/app/core/com.service';
import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { OnInit } from '@angular/core';//---i18n
import { TranslateService } from '@ngx-translate/core';//---i18n

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  languageBtn;//---i18n
  language;//---i18n

  title = 'app';
  // title = 'Putian';
  // title = newTitle;
  public constructor(private titleService: Title,
    public comServ:ComService,
    public translateService: TranslateService, //---i18n
  ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit(): void {

     /* --- set i18n begin -------i18n*/
    this.translateService.addLangs(['zh', 'en']);
    this.translateService.setDefaultLang('zh');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    /* --- set i18n end -------i18n*/


    // const browserLang = this.translateService.getBrowserLang();
    this.settingBtn(browserLang);
    
  }

   /*设置btn的文字和需要传递的参数----i18n*/
   settingBtn(language: string) {
    if (language === 'zh') {
      this.languageBtn = 'English';
      this.language = 'en';
    } else {
      this.languageBtn = '中文';
      this.language = 'zh';
    }
  }

  /*切换语言----i18n*/
  changeLanguage(lang: string) {
    console.log(lang);
    this.translateService.use(lang);
    this.settingBtn(lang);
  }


}
