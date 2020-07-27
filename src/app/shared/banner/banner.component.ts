import { Component,  Input,
       
       HostListener
   } from '@angular/core';
   import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';
  
  @Component({
      selector: 'app-banner',
      templateUrl: './banner.component.html',
      styleUrls: ['./banner.component.css'],
      animations: [
          trigger('imgMove', [
              /** 不显示 */
              state('off', style({'display': 'none', 'z-index': '0', 'transform': 'translateX(0)'})),
              /** 上一张图片 */
              state('prev', style({'z-index': '1',
              'transform': 'translateX(-100%)'})),
              /** 下一张图片 */
              state('next', style({'z-index': '2', 'transform': 'translateX(100%)'})),
              /** 当前图片 */
              state('on', style({'z-index': '3', 'transform': 'translateX(0)'})),
              transition('prev=>on', [
                  animate('0.3s ease-in')
              ]),
              transition('next=>on', [
                  animate('0.3s ease-in')
              ]),
              transition('on=>prev', [
                  animate('0.3s ease-in')
              ]),
              transition('on=>next', [
                  animate('0.3s ease-in')
              ])
          ])
      ]
  })
  export class BannerComponent {
      @Input() public inputImgs: [];
      public current;
      constructor() {
          this.current = 0;
      }
      t ;
      imgs = [];
      ngOnInit(): void {
        this.goMove();
        this.copyImgs();
      } 
      //创建图片副本进行循环
      copyImgs(){
        this.imgs = this.imgs.concat(this.inputImgs);
        this.imgs =  this.imgs.concat(this.inputImgs);
        // this.copies = this.copies.concat(this.imgs);
        console.log('copy,img',this.imgs,this.inputImgs)
      }
      stopMove(){
          clearInterval(this.t);
      }
      goMove(){
        this.t = setInterval(()=>{
            this.Change('left');
        },2000);
      }
      clickDot(i){
          this.stopMove();
          this.current = i-1;
          this.Change('left');   
          setTimeout(()=>{
              this.goMove();
          },1000)
      }
      public ImgState(index) {
        //console.log(index)
          if (this.imgs && this.imgs.length) {
              if (this.current === 0) {
                  return index ===0  ? 'on' :
                  index === 1 ? 'next' :
                  index === this.imgs.length - 1 ? 'prev' :
                  'off';
              } else if (this.current === this.imgs.length - 1) {
                  return index === this.imgs.length - 1 ? 'on' :
                  index === this.imgs.length - 2 ? 'prev' :
                  index ===0  ? 'next' :
                  'off';
              }
              switch (index - this.current) {
                  case 0:
                      return 'on';
                  case 1:
                      return 'next';
                  case -1:
                      return 'prev';
                  default:
                      return 'off';
              }
          } else {
              return 'off';
          }
      }
      public Next() {
          this.current = (this.current + 1) % this.imgs.length;
          
      }
      public Prev() {
          this.current = this.current -1  <  0? this.imgs.length - 1 : this.current - 1;
      }
  
      public Change(e) {
          if (e === 'left') {
              this.Next();
          } else if (e === 'right') {
              this.Prev();
          }
      }
  }