import { Component, OnInit, Input } from '@angular/core';
import { ComService } from 'src/app/core/com.service';

@Component({
  selector: 'app-bread-nav',
  templateUrl: './bread-nav.component.html',
  styleUrls: ['./bread-nav.component.css']
})
export class BreadNavComponent implements OnInit {
 
  constructor(
    public com :ComService
  ) { }

  ngOnInit() {
   
  }

 

}
