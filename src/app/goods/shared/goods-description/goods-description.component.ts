import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-goods-description',
  templateUrl: './goods-description.component.html',
  styleUrls: ['./goods-description.component.scss'],

  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 ,}),
        animate('400ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('400ms', style({ opacity: 0 }))
      ]),
    ]),
  ],

})
export class GoodsDescriptionComponent implements OnInit {

  @Input() currenGoods :any;
  isShown = true;
  isOpen = false;
  public show0:boolean = true;
  public buttonName0:any = 'Show';

  public show1:boolean = false;
  public buttonName1:any = 'Show';

  public show2:boolean = false;
  public buttonName2:any = 'Show';

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isShown = !this.isShown;
  }
  toggle0(){
      this.show0 = !this.show0;
      //更换按钮的名称
      if(this.show0)
      this.buttonName0 = "Hide";
      else
      this.buttonName0 = "Show";
  }

  toggle1(){
    this.show1 = !this.show1;
    if(this.show1)
    this.buttonName1 = "Hide";
    else
    this.buttonName1 = "Show";
  }

  toggle2(){
    this.show2 = !this.show2;
    if(this.show2)
    this.buttonName2 = "Hide";
    else
    this.buttonName2 = "Show";
  }

 

}
