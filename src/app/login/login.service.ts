import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

interface LoginResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginSuccessEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private readonly http: HttpClient) {}

  login(user: string, password: string) {
    const body = { username: user, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<LoginResponse>(
      `${environment.DATAPLICITY_URL}/login`,
      body,
      {
        headers,
      }
    );
  }
}
