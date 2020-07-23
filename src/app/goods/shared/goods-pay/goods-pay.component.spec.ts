import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsPayComponent } from './goods-pay.component';

describe('GoodsPayComponent', () => {
  let component: GoodsPayComponent;
  let fixture: ComponentFixture<GoodsPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
