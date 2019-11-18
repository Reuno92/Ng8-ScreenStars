import { TestBed } from '@angular/core/testing';

import { PathHttpService } from './path-http.service';

describe('PathHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PathHttpService = TestBed.get(PathHttpService);
    expect(service).toBeTruthy();
  });
});
