import { TestBed } from '@angular/core/testing';

import { DiagnosticcenterService } from './diagnosticcenter.service';

describe('DiagnosticcenterService', () => {
  let service: DiagnosticcenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosticcenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
