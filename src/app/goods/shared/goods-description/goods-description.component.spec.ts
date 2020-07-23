import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsDescriptionComponent } from './goods-description.component';

describe('GoodsDescriptionComponent', () => {
  let component: GoodsDescriptionComponent;
  let fixture: ComponentFixture<GoodsDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
