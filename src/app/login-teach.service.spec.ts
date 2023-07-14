import { TestBed } from '@angular/core/testing';

import { LoginTeachService } from './login-teach.service';

describe('LoginTeachService', () => {
  let service: LoginTeachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginTeachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
