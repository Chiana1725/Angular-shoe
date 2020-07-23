import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComService } from './../../core/com.service';
import { UPDATEPWD_FIELDS } from './../../shared/model';
import { TranslateService } from '@ngx-translate/core';//---i18n
import { AuthService } from './../../core/services/auth.service';

@Component({
  selector: 'app-update-pwd',
  templateUrl: './update-pwd.component.html',
  styleUrls: ['./update-pwd.component.scss']
})
export class UpdatePwdComponent implements OnInit {

  languageBtn;//---i18n
  language;//---i18n

  constructor(
    private com: ComService,
    public translateService: TranslateService,//---i18n
    private authService: AuthService,
    private router: Router,
  ) { }

  resetForm = this.com.createFormGroup(UPDATEPWD_FIELDS);
  fields = UPDATEPWD_FIELDS;

  ngOnInit(): void {
    console.log(this.resetForm);

    /* --- set i18n begin -------i18n*/
    this.translateService.addLangs(['en']);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
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
