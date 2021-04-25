import { TestBed } from '@angular/core/testing';

import { TransferArgentService } from './transfer-argent.service';

describe('TransferArgentService', () => {
  let service: TransferArgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferArgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
