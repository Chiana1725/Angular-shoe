import { FormGroup, FormControl, Validators , } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ComService } from './../../core/com.service';
import { REGISTER_FIELDS } from './../../shared/model';
import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public com: ComService,
    private router: Router,
    private authService: AuthService,
  ) { }

  // name = new FormControl('',[
  //   Validators.required,
  //   Validators.pattern(/^\S+$/),
  // ])

  emailType : 1;
  verifyEmail : true;

  registerForm = this.com.createFormGroup(REGISTER_FIELDS);
  fields = REGISTER_FIELDS;

  ngOnInit(): void {
    // console.log(this.registerForm);

    this.com.httpPost('/api/user/verify-email',this.emailType);
  }

  register(){
    this.com.httpPost('/api/user/register',this.registerForm.value);
    this.router.navigate(['/auth/login']);
    // setTimeout(() => {
    //   this.authService.AuthComeback(() => {
    //     this.router.navigate(['/auth/login']);
    //   });
    // }, 2000);
    
  }


}
