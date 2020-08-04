import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { lists } from './../shared/lists';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor() { }

  // getDetail(id: number | string){
  //   return this.getDetails().pipe(
  //     map(())
  //   )
  // }
}
