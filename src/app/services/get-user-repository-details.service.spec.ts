import { TestBed } from '@angular/core/testing';

import { GetUserRepositoryDetailsService } from './get-user-repository-details.service';

describe('GetUserRepositoryDetailsService', () => {
  let service: GetUserRepositoryDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserRepositoryDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
