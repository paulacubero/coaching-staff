import { TestBed } from '@angular/core/testing';

import { AuthMedicalGuard } from './auth-medical.guard';

describe('AuthMedicalGuard', () => {
  let guard: AuthMedicalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthMedicalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
