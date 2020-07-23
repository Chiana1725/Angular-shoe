import { TestBed } from '@angular/core/testing';

import { UserAccountResolveService } from './user-account-resolve.service';

describe('UserAccountResolveService', () => {
  let service: UserAccountResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAccountResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
