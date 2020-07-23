import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromtComponent } from './promt.component';

describe('PromtComponent', () => {
  let component: PromtComponent;
  let fixture: ComponentFixture<PromtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
