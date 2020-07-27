import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bread-nav',
  templateUrl: './bread-nav.component.html',
  styleUrls: ['./bread-nav.component.css']
})
export class BreadNavComponent implements OnInit {
  @Input() navArr;
  constructor() { }

  ngOnInit() {
   
  }

 

}
