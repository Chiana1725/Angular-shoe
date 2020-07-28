import { Component, OnInit, Input, SimpleChanges  } from '@angular/core';
import { lists, close } from './../../../shared/lists'; 
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShopService } from './../../../core/services/shop.service';
import { ImgDisplayPopComponent } from '../img-display-pop/img-display-pop.component';
/*@Component({
  selector: 'ngbd-modal-content',
  template: `
    <img style="float:right; margin:10px" (click)="activeModal.close('Close click')" src={{close.close}}>
    <img  src={{details[0].image}}>   
  `
})
export class NgbdModalContent {

 
  @Input() details = lists;
  @Input() close = close ;
  constructor(public activeModal: NgbActiveModal) {}
}
*/

@Component({
  selector: 'app-goods-display',
  templateUrl: './goods-display.component.html',
  styleUrls: ['./goods-display.component.scss']
})
export class GoodsDisplayComponent implements OnInit {
  @Input() detail:string;
  // @Input() lists: any;
  lists=lists[0].image;

  //商品信息
  @Input() goods ;

  constructor(
    private modalService: NgbModal,
    private shopSer: ShopService,
    ) { }

  ngOnInit(): void {
   
  }


  open() {
    const modalRef = this.modalService.open(ImgDisplayPopComponent);
    modalRef.componentInstance.src = this.goods.src;
  }

}
