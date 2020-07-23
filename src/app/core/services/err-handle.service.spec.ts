import { TestBed } from '@angular/core/testing';

import { ErrHandleService } from './err-handle.service';

describe('ErrHandleService', () => {
  let service: ErrHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
