import { TestBed } from '@angular/core/testing';
import { FuneralesService } from './funerales.service';



describe('FuneralesService', () => {
  let service: FuneralesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuneralesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
