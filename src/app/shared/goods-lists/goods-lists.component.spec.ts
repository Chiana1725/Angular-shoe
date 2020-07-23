import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsListsComponent } from './goods-lists.component';

describe('GoodsListsComponent', () => {
  let component: GoodsListsComponent;
  let fixture: ComponentFixture<GoodsListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
