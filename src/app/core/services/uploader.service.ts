import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor() { }

  // return this.http.request(req).pipe(
  //   map(event => this.getEventMessage(event,file)),
  //   tap(message => this.showProgress(message)),
  //   last(),
  //   catchError(this.handleError(file))
  // );

  

}
