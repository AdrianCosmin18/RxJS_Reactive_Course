import { TestBed } from '@angular/core/testing';

import { BandDataService } from './band-data.service';

describe('BandDataService', () => {
  let service: BandDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
