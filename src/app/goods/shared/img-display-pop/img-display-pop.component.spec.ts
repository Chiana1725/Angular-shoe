import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDisplayPopComponent } from './img-display-pop.component';

describe('ImgDisplayPopComponent', () => {
  let component: ImgDisplayPopComponent;
  let fixture: ComponentFixture<ImgDisplayPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgDisplayPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgDisplayPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
