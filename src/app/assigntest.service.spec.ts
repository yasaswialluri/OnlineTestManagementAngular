import { TestBed } from '@angular/core/testing';

import { AssigntestService } from './assigntest.service';

describe('AssigntestService', () => {
  let service: AssigntestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssigntestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
