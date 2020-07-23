import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, style, transition, query, animate, group } from '@angular/animations';

@Component({
  selector: 'app-shuffling',
  templateUrl: './shuffling.component.html',
  styleUrls: ['./shuffling.component.scss'],
  animations: [
    trigger('carousel', [
      transition(':increment', [
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('1s')
          ]),
          query(':leave', [
            animate('1s', style({ transform: 'translateX(100%)' }))
          ])
        ])
      ]),
      transition(':decrement', [
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('1s')
          ]),
          query(':leave', [
            animate('1s', style({ transform: 'translateX(-100%)' }))
          ])
        ])
      ]),
    ])
  ]
})
export class ShufflingComponent implements OnInit, OnDestroy {

  // url = '/assets/images/';        //图片文件路径
  url = '/assets/images/';

  state = 0;                                 

  timer: any;                              //定时器

  imgIndex = 2;

  startX: any;                             //起始触摸位置

  endX: any;                              //离开触摸位置

  startTime: number;              //其实触摸时间

  endTime: number;                //结束触摸时间

  screenWidth = document.documentElement.offsetWidth;

  images = [

    {id: 1, name: 'shuffling1.png', state: true},

    {id: 2, name: 'shuffling2.png', state: false},

    // {id: 3, name: 'shuffling1.png', state: false},

    // {id: 4, name: 'shuffling2.png', state: false},

  ];

  constructor() { }

  ngOnInit(): void {
    this. timer = setInterval(() => this.fn(), 30000);
  }

  ngOnDestroy() {

    // 停止轮播

    this.stop();

    //清空定时器

     clearInterval(this. timer);

  }

  fn() {

    this. imgIndex++;

    //轮播到最后一张图片时将图片索引置为零

    if (this.imgIndex> this.images.length - 1) {

        this.imgIndex = 0;

    }

 this.images.forEach(val => {

      val.state = false;

    });

    this.images[this.imgIndex].state = true;

  }

   //结束轮播

  stop() {

    clearInterval(this. timer);

  }

   //开始轮播

  start() {

    this. timer = setInterval(this.fn.bind(this), 8000);

  }

   //点击圆点切换轮播图，停止自动轮播

  clickDot(dotIndex) {

    this.imgIndex = dotIndex - 1;

    this.images.forEach(val => {

      val.state = false;

    });

    this.images[dotIndex - 1].state = true;

    this.stop();

  }

  blurDot() {

    this.start();

  }

    //获取初始滑动位置

  getStartX(e) {

    this.stop();

    this.startTime = Date.now();

    const touch = e.touches[0] || e.changedTouches[0];

    this.startX = touch.pageX;

  }

  // 获取滑动距离

  getMoveX(e) {

    const touch = e.touches[0] || e.changedTouches[0];

    this.endX = touch.pageX;

  }

  // 滑动结束位置

  getEndX(imgIndex) {

    const dx =  this.endX - this.startX;

    const dTime = Date.now() - this.startTime;

    if (Math.abs(dx) > this.screenWidth / 3 || (dTime < 300 && Math.abs(dx) > 30)) {

      this.images.forEach(val => {

        val.state = false;

      });

        // 右滑动

      if (dx > 0) {

        const leftDragIndex  = imgIndex === this.images.length - 1 ? 0 : imgIndex + 1;

        this.images[leftDragIndex].state = true;

      } else { 

        // 左滑动

        const rightDragIndex  = imgIndex === 0 ? this.images.length - 1 : imgIndex - 1;

        this.images[rightDragIndex].state = true;

      }

    }

    //确保清空旧的定时器

    this.stop();

    this.start();

  }

}
