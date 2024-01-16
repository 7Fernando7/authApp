import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../enviroments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User, AuthStatus } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;

  private http = inject( HttpClient );

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>( AuthStatus.checking);

  constructor() { }

  login( email: string, password: string): Observable<boolean> {


    return of(true);
  }
}
