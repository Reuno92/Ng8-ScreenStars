import { TestBed } from '@angular/core/testing';

import {CommonTabsetService} from './common-tabset.service';

describe('TvShowTabsetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonTabsetService = TestBed.get(CommonTabsetService);
    expect(service).toBeTruthy();
  });
});
