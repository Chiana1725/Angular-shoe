import { Component, OnInit } from '@angular/core';
import { ComService } from 'src/app/core/com.service';
@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  constructor(
    public com:ComService,
  ) { 
    
  }

  ngOnInit(): void {
  }

  determine(){
    
  }
}
