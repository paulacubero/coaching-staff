import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCoachGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(): boolean {
    if (this._authService.isAuthenticatedAsCoach()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
  
}
