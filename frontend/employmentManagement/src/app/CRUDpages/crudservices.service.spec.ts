import { TestBed } from '@angular/core/testing';

import { CRUDservicesService } from './crudservices.service';

describe('CRUDservicesService', () => {
  let service: CRUDservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
