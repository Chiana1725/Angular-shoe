import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsDetaillistComponent } from './goods-detaillist.component';

describe('GoodsDetaillistComponent', () => {
  let component: GoodsDetaillistComponent;
  let fixture: ComponentFixture<GoodsDetaillistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsDetaillistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsDetaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
