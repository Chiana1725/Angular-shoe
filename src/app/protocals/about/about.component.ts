import { Component, OnInit } from '@angular/core';
import {MALL_NAME} from '../../shared/model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  MALL_NAME = MALL_NAME;
  constructor() { }

  ngOnInit() {
  }

}
