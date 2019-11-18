import { TestBed } from '@angular/core/testing';

import { AccessIdService } from './access-id.service';

describe('AccessIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessIdService = TestBed.get(AccessIdService);
    expect(service).toBeTruthy();
  });
});
