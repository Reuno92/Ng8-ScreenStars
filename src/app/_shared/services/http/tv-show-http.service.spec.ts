import { TestBed } from '@angular/core/testing';

import { TvShowHttpService } from './tv-show-http.service';

describe('TvShowHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvShowHttpService = TestBed.get(TvShowHttpService);
    expect(service).toBeTruthy();
  });
});
