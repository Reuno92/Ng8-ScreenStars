import {TestBed} from '@angular/core/testing';

import {SeasonHttpService} from './season-http.service';

describe('SeasonHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeasonHttpService = TestBed.get(SeasonHttpService);
    expect(service).toBeTruthy();
  });
});
