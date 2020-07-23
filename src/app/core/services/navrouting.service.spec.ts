import { TestBed } from '@angular/core/testing';

import { NavroutingService } from './navrouting.service';

describe('NavroutingService', () => {
  let service: NavroutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavroutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
