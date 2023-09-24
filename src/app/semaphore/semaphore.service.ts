import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SemaphoreService {
  private readonly API_URL = 'https://precedent-lion-8910.dataplicity.io';

  constructor(private readonly http: HttpClient) {}

  private getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  setSemaphoreState(newState: number) {
    const access_token = this.getAccessToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    });
    return this.http.post(
      `${this.API_URL}/set_state`,
      { state: newState },
      { headers }
    );
  }

  setSemaphoreFreq(frequency: number, semaphore: number) {
    const access_token = this.getAccessToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    });
    const body = { freq: frequency, semaforo: semaphore };

    return this.http.post(`${this.API_URL}/set_freq`, body, { headers });
  }
}
