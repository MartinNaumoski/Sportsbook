import { TestBed } from '@angular/core/testing';

import { MatchesGridService } from './matches-grid.service';

describe('MatchesGridService', () => {
  let service: MatchesGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
