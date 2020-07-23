import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';//

import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavroutingService {

  private missionAnnouncedSource = new Subject<string>();//
  private missionConfirmedSource = new Subject<string>();//

  missionAnnounced$ = this.missionAnnouncedSource.asObservable();//
  missionConfirmed$ = this.missionConfirmedSource.asObservable();//

  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }//
  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }//

  

  navStart : Observable<NavigationStart>;

  constructor(private router:Router) {
    // this.navStart = router.events.pipe(
    //   filter(evt => evt instanceof NavigationEnd)
    // )as Observable<NavigationStart>;
  }

  setTitle(){
    this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    )as Observable<NavigationStart>;
  }

}
