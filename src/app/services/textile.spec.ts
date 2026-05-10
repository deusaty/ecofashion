import { TestBed } from '@angular/core/testing';

import { Textile } from './textile';

describe('Textile', () => {
  let service: Textile;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Textile);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
