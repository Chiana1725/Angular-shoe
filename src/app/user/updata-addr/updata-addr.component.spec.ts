import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataAddrComponent } from './updata-addr.component';

describe('UpdataAddrComponent', () => {
  let component: UpdataAddrComponent;
  let fixture: ComponentFixture<UpdataAddrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdataAddrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdataAddrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
