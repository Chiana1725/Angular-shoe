import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComService } from './../../core/com.service';
import { OrderService,MyAddrInfo, MyorderInfo } from './../../core/services/order.service';
import { ACCOUNT_FIELDS } from './../../shared/model';
import { Router } from '@angular/router';
// import { account, myAddr, bankcard  } from '../../shared/lists';
import { AuthService } from './../../core/services/auth.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  // public Accountmsg:any = account;
  public Addrmsg:MyAddrInfo;
  myaddr: any; //动态数据--地址
  // public Bankcardmsg:any = bankcard;
  // myorderInfo: MyorderInfo;
  // msg = this.Accountmsg.concat(this.Addrmsg)

  // public msg:any = REGISTER_FIELDS;

  constructor(
    private com: ComService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router,
  ) { }

  accountForm :FormGroup
  // accountForm = this.com.createFormGroup(ACCOUNT_FIELDS);
  fields = ACCOUNT_FIELDS;
  


  // must = this.fields.slice(0,2);
  // address = this.fields.slice(2,9);
  // bankcard = this.fields.slice(9,12);


  ngOnInit(): void {
    // const addr = window.localStorage.getItem('my_addr');
    // console.log(addr + "我的地址正确显示");
    // let jgaddr = JSON.parse(addr);
    // this.myaddr = jgaddr.data[0];
    // console.log(this.myaddr);//最终地址{}

    this.Addrmsg = this.orderService.GetMyAddrInfo();//地址
    
    // this.myorderInfo = this.orderService.GetMyorderInfo();
    console.log(this.Addrmsg.data[0]);
    this.myaddr = this.Addrmsg.data[0];
    console.log(this.myaddr);
 

    // this.fields.forEach(el=>{
      
    //   // el.value = this.Accountmsg[el.name];
    //   // el.value = this.Addrmsg[el.name];
    //   // el.value = this.Bankcardmsg[el.name];
    //   el.value = this.Accountmsg[el.name] && this.Addrmsg[el.name] && this.Bankcardmsg[el.name];
    // })
    // this.accountForm =  this.com.createFormGroup( this.fields);

      // this.must.forEach(el=>{
      //   el.value = this.Accountmsg[el.name];
      // })
      // this.accountForm =  this.com.createFormGroup( this.fields);

      this.fields.forEach(el=>{
        el.value = this.myaddr[el.name];
      })
      this.accountForm =  this.com.createFormGroup( this.fields);

      // this.bankcard.forEach(el=>{
      //   el.value = this.Bankcardmsg[el.name];
      // })
      // this.accountForm =  this.com.createFormGroup( this.fields);

  }

  account(){
    /*7-7改*/
    // this.com.httpPost('/api/user/update-my-addr',this.accountForm.value);
    // setTimeout(() => {
    //   this.authService.AuthComeback(() => {
    //     this.router.navigate(['/user/account']);
    //   });
    // }, 2000);

    let post = this.accountForm.value ;
    post.addr = post.streetAddress;
    delete post.streeAddress;
    
    this.authService.Updateaddr(this.accountForm.value).subscribe(
      () => {
        console.log("222222222222222222")
      }
    )
  }

}
