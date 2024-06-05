import { TestBed } from '@angular/core/testing';

import { AuthCoachGuard } from './auth-coach.guard';

describe('AuthCoachGuard', () => {
  let guard: AuthCoachGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthCoachGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
