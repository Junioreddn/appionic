import { TestBed } from '@angular/core/testing';

import { NumeroserviceService } from './numeroservice.service';

describe('NumeroserviceService', () => {
  let service: NumeroserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumeroserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
