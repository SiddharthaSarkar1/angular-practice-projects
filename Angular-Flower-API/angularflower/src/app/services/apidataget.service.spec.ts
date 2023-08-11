import { TestBed } from '@angular/core/testing';

import { ApidatagetService } from './apidataget.service';

describe('ApidatagetService', () => {
  let service: ApidatagetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApidatagetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
