import { ComService } from './../../core/com.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFields  } from './../model';
import { Subject, Subscription, Observable, from } from 'rxjs';//
import { debounceTime, } from 'rxjs/operators';//
import { MyInfoResponse } from '../model';
// import { account,myAddr} from '../../shared/lists';
import {
  Directive,
  HostListener,
  Output,
  EventEmitter,
  OnDestroy,
  HostBinding
} from '@angular/core';//



@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  // public msg = myAddr.data[0];
  // public myAddr = myAddr.data[0];

  withRefresh = false;//
  // packages$: Observable<NpmPackageInfo[]>;//
  private searchText$ = new Subject<string>();//

  constructor(
    public com:ComService
  ) {}

  @Input() f: FormFields;
  @Input() isEdit: boolean;
  @Input() form: FormGroup;
  @Input() m: MyInfoResponse;
  @Input() msg: any;

  ngOnInit(): void {   
    console.log('form',this.form,this.msg)
  }
  

  selected (e){
    console.log(e);
  }

  // ngOnInit(): void {
  //   this.searchText$
  //   .pipe(
  //     debounceTime(500),
  //   )
  //   .subscribe(value => {
  //     console.log("6.2lccm---1.1")
  //   })
  // }
  // selected(e){
  //   console.log(e); 
  // }



  search(packageName: string) {
    this.searchText$.next(packageName);
    
    console.log("6.2lccm---1.0")
  }

}


//    https://stackblitz.com/edit/angular-debounce-input-example?file=src%2Fapp%2Fapp.component.ts