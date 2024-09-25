import { TestBed } from '@angular/core/testing';

import { BackgroundserviceService } from './backgroundservice.service';

describe('BackgroundserviceService', () => {
  let service: BackgroundserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
