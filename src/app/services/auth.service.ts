import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { COACH_ROLE, MEDICAL_ROLE } from '../constants/constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private _http: HttpClient, private _router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this._http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this._router.navigate(['/login']);
  }

  isAuthenticatedAsCoach(): boolean {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    return !!(token && userRole === COACH_ROLE);
  }

  isAuthenticatedAsMedical(): boolean {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    return !!(token && userRole === MEDICAL_ROLE);
  }
}
