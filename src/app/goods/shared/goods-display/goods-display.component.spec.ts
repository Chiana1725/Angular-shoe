import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsDisplayComponent } from './goods-display.component';

describe('GoodsDisplayComponent', () => {
  let component: GoodsDisplayComponent;
  let fixture: ComponentFixture<GoodsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
