import { TestBed } from '@angular/core/testing';

import { ReadapiService } from './readapi.service';

describe('ReadapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadapiService = TestBed.get(ReadapiService);
    expect(service).toBeTruthy();
  });
});
