import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API_URL = 'https://precedent-lion-8910.dataplicity.io';

  loginSuccessEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private readonly http: HttpClient) {}

  login(user: string, password: string) {
    this.loginSuccessEvent.emit(true);
    // const body = { user, password };
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.post(`${this.API_URL}/login`, body, { headers });
  }
}
