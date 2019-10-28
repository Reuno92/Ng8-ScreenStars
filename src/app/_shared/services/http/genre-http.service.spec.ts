import { TestBed } from '@angular/core/testing';

import { GenreHttpService } from './genre-http.service';

describe('GenreHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenreHttpService = TestBed.get(GenreHttpService);
    expect(service).toBeTruthy();
  });
});
