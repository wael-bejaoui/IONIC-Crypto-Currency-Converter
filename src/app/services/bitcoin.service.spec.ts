import { TestBed } from '@angular/core/testing';

import { Service1 } from './bitcoin.service';

describe('Service1', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Service1 = TestBed.get(Service1);
    expect(service).toBeTruthy();
  });
});
