import { TestBed } from '@angular/core/testing';

import { EdServiceService } from './ed-service.service';

describe('EdServiceService', () => {
  let service: EdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
