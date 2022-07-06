import { TestBed } from '@angular/core/testing';

import { SportbookService } from './sportbook.service';

describe('SportbookService', () => {
  let service: SportbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
