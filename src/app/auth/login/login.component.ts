import { LoginPostData } from './../../shared/model';
import { Subject, Observable } from 'rxjs';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { authData } from './../auth';
import { ComService } from './../../core/com.service';
import { LOGIN_FIELDS } from '../../shared/model';
import { FormFields } from '../../shared/model';
import { TranslateService } from '@ngx-translate/core';//---i18n
import { OrderService } from './../../core/services/order.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  languageBtn;//---i18n
  language;//---i18n

  private searchText$ = new Subject<string>();//

  @Input() f: FormFields;
  @Input() isEdit: boolean;
  @Input() form: FormGroup;

  constructor(
    private router: Router,
    private com: ComService,
    private authService: AuthService,
    public translateService: TranslateService,//---i18n
    private orderSer: OrderService,
  ) { }

  error: string;
  authdata = authData;
  fields = LOGIN_FIELDS;
  out: boolean;
  // loginForm: FormGroup = this.com.createFormGroup(LOGIN_FIELDS);

  hidePwd = true;
  user = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\S+$/)
  ]);
  pwd = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\S{6,32}$/)
  ]);

  loginForm = new FormGroup({
    user: this.user,
    pwd: this.pwd,
  });

  ngOnInit(): void {
    /* --- set i18n begin -------i18n*/
    this.translateService.addLangs(['en']);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
    /* --- set i18n end -------i18n*/
  }

  toggle() {
    this.out = !this.out;
    //总是给当前控件，赋与他当前状态相反的值
  }


  login(): void {
    this.com.httpPost('/api/auth/login', this.loginForm.value).subscribe(data => {
      if (typeof (data) === 'object') {  
          this.authService.SetUserInfo(data);     
          this.authService.AuthComeback('/user/account');   
      }else{
        this.error = data;
      }
    })
    /* this.authService.login({
       user: this.user.value,
       pwd: this.pwd.value,
     }).subscribe(
       (data) => {
         console.log('data',data);
         // this.router.navigate([this.authService.RedirectURL]):'/goods/index';
         // let redirect = this.authService.RedirectURL ? this.router.parseUrl(this.authService.redirectUrl):'/user/account';
         // this.router.navigateByUrl(redirect);
         this.authService.GetLatestUserInfo()&&this.orderSer.GetLastMyAddrInfo().subscribe(
           (uinfo) => {
             let redirect = this.authService.RedirectURL ? this.router.parseUrl(this.authService.redirectUrl):'/user/account';
             this.router.navigateByUrl(redirect);
 
             // this.orderSer.GetLastMyAddrInfo().subscribe(
             //   (info) => {
             //     this.router.navigate(['/user/account']);
             //   },
             //   (err:Error) => {
             //     this.router.navigate(['/auth/login']);
             //     // alert(err.message);
             //   }
             // )
 
 
           },
           error=>{
             console.log('error',error);
             alert(error.message);
           }
         )
       },
       (err) => {
         this.authService.setStorage;
       }
     );*/





  }


  // login(){

  //   let data = {
  //     username: this.loginForm[0].val,
  //     password: this.loginForm[1].val,
  //   }

  //   this.authService.login().subscribe(
  //     (resp)=>{
  //       this.router.navigate([this.authService.redirectUrl]);
  //     },
  //     (err) => {
  //       alert("login failed")
  //     }
  //   )
  // }

  search(packageName: string) {
    this.searchText$.next(packageName);
  }

  selected(e) {
    console.log(e);
  }



}
