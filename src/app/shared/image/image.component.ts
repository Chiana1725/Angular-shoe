import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  //图片样式
  @Input() className :string;
  //图片地址
  @Input() src :string ;
  //图片无法显示替换语句
  @Input() alt :string;
  //图片鼠标滑动到时显示的文字
  @Input() title :string;
  @Input() height:number | string;
  @Input() width:number | string;
  //无法显示图片时的替换图片
  @Input() errorImage :string;

  constructor() { }

  ngOnInit(): void {
  }

  errorShow(){
    this.src = this.errorImage || 'assets/images/1_50x43.png/';
  }

}
