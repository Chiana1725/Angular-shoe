import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComService } from './../../core/com.service';
import { RESET_FIELDS } from './../../shared/model';
import { TranslateService } from '@ngx-translate/core';//---i18n
import { AuthService } from './../../core/services/auth.service';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  languageBtn;//---i18n
  language;//---i18n

  constructor(
    private com: ComService,
    public translateService: TranslateService,//---i18n
    private authService: AuthService,
    private router: Router,
  ) { }

  resetForm = this.com.createFormGroup(RESET_FIELDS);
  fields = RESET_FIELDS;

  ngOnInit(): void {
    console.log(this.resetForm);

     /* --- set i18n begin -------i18n*/
     this.translateService.addLangs(['en']);2
     this.translateService.setDefaultLang('en');
     const browserLang = this.translateService.getBrowserLang();
     this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
     /* --- set i18n end -------i18n*/
  }

  reset(){
    // this.com.httpPost('/api/user/verify-email',this.resetForm.value);
    this.com.httpPost('/api/auth/update-pwd',this.resetForm.value);
    setTimeout(() => {
      this.authService.AuthComeback(() => {
        this.router.navigate(['/auth/login']);
      });
    }, 2000);
  }

  


}
