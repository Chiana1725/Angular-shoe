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



  registerForm = this.com.createFormGroup(REGISTER_FIELDS);
  fields = REGISTER_FIELDS;
  error:string;

  ngOnInit(): void {
   
  }

  register(){

    let val = this.registerForm.value;
    console.log('val',val);
    this.verifyEmail(val.email,()=>{
      this.registerDataPost(val);
    });

 
  }

  registerDataPost(val){
    this.com.httpPost('/api/user/register',val).subscribe(res=>{
      if(typeof(res)==='string'){
        this.error = res;
        // 
      }else{
        alert('注册成功!');
        this.router.navigate(['/auth/login']);
      }     
    });
  }

  verifyEmail(email,callBack){
    this.com.httpPost('/api/user/verify-email',{email,emailType:0,verifyEmail:true}).subscribe(res=>{
     
      if(typeof(res)==='string'){
        this.error = res;
      }else{
        /**
         * isSending: boolean
         *  registered: boolean
         * senderEmail: string
         */
       this.error =  res.registered ?  'email is registerd,please use another one':callBack();
        
      }    
    })
  }


}
