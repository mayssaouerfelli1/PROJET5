import { TestBed } from '@angular/core/testing';

import { chansonService } from './chanson.service';

describe('chansonService', () => {
  let service: chansonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(chansonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
