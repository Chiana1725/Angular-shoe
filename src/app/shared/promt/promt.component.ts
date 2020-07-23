import { Component, OnInit, Input} from '@angular/core';
import { ComService } from 'src/app/core/com.service';
import { Location } from '@angular/common';
import { close } from './../lists';

@Component({
  selector: 'app-promt',
  templateUrl: './promt.component.html',
  styleUrls: ['./promt.component.scss']
})

export class PromtComponent implements OnInit {

  constructor(
    public com: ComService,
    private location: Location,
  ) { }


  ngOnInit(): void {
  }

  close(){
    // this.PromtComponent
    this.location.back();
  }

}
