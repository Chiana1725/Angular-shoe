import { Component, OnInit } from '@angular/core';
import {MALL_NAME} from '../../shared/model';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  MALL_NAME = MALL_NAME ;
  constructor() { }

  ngOnInit() {
  }

}
