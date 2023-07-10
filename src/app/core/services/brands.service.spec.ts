import { TestBed } from '@angular/core/testing';

import { BrandsService } from './brands.service';
import { HttpClientModule } from '@angular/common/http';

describe('BrandsService', () => {
  let service: BrandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BrandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
