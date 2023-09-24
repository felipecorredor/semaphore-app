import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SemaphoreService {
  private readonly API_URL = 'https://precedent-lion-8910.dataplicity.io';

  constructor(private readonly http: HttpClient) {}

  private getAccessToken(): string {
    return localStorage.getItem('access_token') || '';
  }

  private createHeaders(): HttpHeaders {
    const access_token = this.getAccessToken();

    console.log('access_token::', access_token);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    });
  }

  setSemaphoreState(state: number) {
    const headers = this.createHeaders();

    return this.http.post(`${this.API_URL}/set_state`, { state }, { headers });
  }

  setSemaphoreFreq(frequency: number, semaphore: number) {
    const headers = this.createHeaders();

    const body = { freq: frequency, semaforo: semaphore };

    return this.http.post(`${this.API_URL}/set_freq`, body, { headers });
  }
}
