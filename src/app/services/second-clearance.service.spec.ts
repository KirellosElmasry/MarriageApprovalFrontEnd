import { TestBed } from '@angular/core/testing';

import { SecondClearanceService } from './second-clearance.service';

describe('SecondClearanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecondClearanceService = TestBed.get(SecondClearanceService);
    expect(service).toBeTruthy();
  });
});
