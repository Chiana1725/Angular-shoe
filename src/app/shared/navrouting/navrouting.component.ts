import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { NavroutingService } from '../../core/services/navrouting.service';

@Component({
  selector: 'app-navrouting',
  templateUrl: './navrouting.component.html',
  styleUrls: ['./navrouting.component.scss'],
  
})
export class NavroutingComponent implements OnInit {

  smallTitle;//
  This_Does_Not_Work:Title;


  navStart: Observable<NavigationStart>;

  constructor(
    private router: Router,
    private title: Title,
    private navroutingService:NavroutingService,
    ) {

   }

   setTitle(newTitle:string){
    //  this.navroutingService.setTitle
   }
  

  ngOnInit(): void {
    this.navStart.subscribe(evt => {
      //更改页面的title
      // const titles = this.getTitle
    })
  }


}
