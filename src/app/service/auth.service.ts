import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserDetails } from '../models/user-details.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authServiceUrl = `${environment.protocol}${environment.applicationUrl}/${environment.userService}`;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(user: UserDetails) {
      this.saveToSessionStorage(user);
  }

  saveToSessionStorage(user: UserDetails) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  fetchFromSessionStorage(): UserDetails {
    return JSON.parse(sessionStorage.getItem('user') || '{}');
  }

  logout(): void {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  redirectIfLoggedIn() {
    if (this.fetchFromSessionStorage()?.id)
      this.router.navigate(['/dashboard']);
  }
}