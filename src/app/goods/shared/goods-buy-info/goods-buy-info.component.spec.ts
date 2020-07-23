import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsBuyInfoComponent } from './goods-buy-info.component';

describe('GoodsBuyInfoComponent', () => {
  let component: GoodsBuyInfoComponent;
  let fixture: ComponentFixture<GoodsBuyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsBuyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsBuyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
