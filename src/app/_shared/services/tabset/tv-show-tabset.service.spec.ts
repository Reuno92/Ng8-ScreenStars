import { TestBed } from '@angular/core/testing';

import { TvShowTabsetService } from './tv-show-tabset.service';

describe('TvShowTabsetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvShowTabsetService = TestBed.get(TvShowTabsetService);
    expect(service).toBeTruthy();
  });
});
