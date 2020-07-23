import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavroutingComponent } from './navrouting.component';

describe('NavroutingComponent', () => {
  let component: NavroutingComponent;
  let fixture: ComponentFixture<NavroutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavroutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
