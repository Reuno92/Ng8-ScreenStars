import { TestBed } from '@angular/core/testing';

import { Discover.HttpService } from './discover.http.service';

describe('Discover.HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Discover.HttpService = TestBed.get(Discover.HttpService);
    expect(service).toBeTruthy();
  });
});
