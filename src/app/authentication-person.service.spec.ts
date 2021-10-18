import { TestBed } from '@angular/core/testing';

import { AuthenticationPersonService } from './authentication-person.service';

describe('AuthenticationPersonService', () => {
  let service: AuthenticationPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
