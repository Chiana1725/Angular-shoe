import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  pageHeight: number;
  pageWidth: number;

  ngOnInit() {
    this.pageHeight = window.innerHeight;
    this.pageWidth = window.innerWidth;
    // console.log({
    //   DATA: this.pageHeight,
    //   SDGS:  this.pageWidth
    // })
    window.onresize = (event) => {
      this.pageHeight = window.innerHeight;
      this.pageWidth = window.innerWidth;
    };
  }

}
