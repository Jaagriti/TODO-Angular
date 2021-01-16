import { TestBed } from '@angular/core/testing';

import { HardcodedAuthenService } from './hardcoded-authen.service';

describe('HardcodedAuthenService', () => {
  let service: HardcodedAuthenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
