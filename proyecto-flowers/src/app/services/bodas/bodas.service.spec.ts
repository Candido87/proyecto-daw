import { TestBed } from '@angular/core/testing';

import { BodasService } from './bodas.service';

describe('BodasService', () => {
  let service: BodasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
