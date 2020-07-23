import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private route :ActivatedRoute
  ) { }


  code :string | number;
  msg :string;
  ngOnInit() {
    document.documentElement.style.height="100%";
    document.body.style.height="100%";

   this.route.paramMap.subscribe(res=>{
     this.code = res.get('code') || 404
     this.msg = res.get('msg') || 'Page Not Found !'   
     console.log('res',res);  
   })
  }

  goBack(){
    window.history.go(-1);
  }
}
