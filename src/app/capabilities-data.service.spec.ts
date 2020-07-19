import { TestBed } from '@angular/core/testing';

import { CapabilitiesDataService } from './capabilities-data.service';

describe('CapabilitiesDataService', () => {
  let service: CapabilitiesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapabilitiesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
