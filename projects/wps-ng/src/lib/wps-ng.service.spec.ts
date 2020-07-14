import { TestBed } from '@angular/core/testing';

import { WpsNgService } from './wps-ng.service';

describe('WpsNgService', () => {
  let service: WpsNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpsNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
