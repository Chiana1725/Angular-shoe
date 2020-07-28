import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'goods-img-display-pop',
  templateUrl: './img-display-pop.component.html',
  styleUrls: ['./img-display-pop.component.scss']
})
export class ImgDisplayPopComponent implements OnInit {
  //图片地址
  @Input() src :string;
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
