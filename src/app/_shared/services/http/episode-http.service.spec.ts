import {TestBed} from '@angular/core/testing';

import {EpisodeHttpService} from './episode-http.service';

describe('EpisodeHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpisodeHttpService = TestBed.get(EpisodeHttpService);
    expect(service).toBeTruthy();
  });
});
