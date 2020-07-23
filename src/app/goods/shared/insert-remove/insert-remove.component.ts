import { Component, OnInit , HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-insert-remove',
  templateUrl: './insert-remove.component.html',
  styleUrls: ['./insert-remove.component.scss'],

  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 ,backgroundColor: 'blue'}),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 }))
      ]),


    ]),
  
  ],
})
export class InsertRemoveComponent implements OnInit {

  isShown = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isShown = !this.isShown;
  }

}
