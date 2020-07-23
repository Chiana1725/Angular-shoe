import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsDetailsComponent } from './logistics-details.component';

describe('LogisticsDetailsComponent', () => {
  let component: LogisticsDetailsComponent;
  let fixture: ComponentFixture<LogisticsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
