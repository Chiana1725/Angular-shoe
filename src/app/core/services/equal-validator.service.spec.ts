import { TestBed } from '@angular/core/testing';

import { EqualValidatorService } from './equal-validator.service';

describe('EqualValidatorService', () => {
  let service: EqualValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EqualValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
