import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor() { }
}
