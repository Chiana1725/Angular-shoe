import { ComService } from 'src/app/core/com.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-declare',
  templateUrl: './declare.component.html',
  styleUrls: ['./declare.component.scss']
})
export class DeclareComponent implements OnInit {

  @Input() close = close;
  @Input() payId;

  constructor(
    //public activeModal: NgbActiveModal,
    public com:ComService,
  ) { }
 
  private activeLink: string = 'default-active-link';

  ngOnInit(): void {
    // console.log('111111111');
    // window.location.href = "https://www.baidu.com";
    // document.getElementsByTagName('form').
    /*  */ window.onload = () => {
      document.forms[0].submit;
    };
    // this.onSubmit(e);

  }

  onSubmit(e){
    e.target.submit();
  }
  /**/
  agree(){
      let post = { id: this.payId }
      console.log(post);
      this.com.httpGet('/api/order/pay-order', { id: this.payId }, "body", "text").subscribe((res: string) => {
        document.open();
        document.write(res);
        document.close();
      }, (err) => {
        console.error(err);
      });

    // this.com.httpPost('/api/order/pay-order',{id:this.com.purcharsID}).subscribe(res=>{
    //   console.log('declare',res);
    // })
  } 
  disagree(){
   this.com.isShowDeclare = false;
  }
}
