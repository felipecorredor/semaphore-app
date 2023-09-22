import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SemaphoreService {
  private readonly API_URL = 'https://precedent-lion-8910.dataplicity.io';

  constructor(private readonly http: HttpClient) {}

  setSemaphoreState(newState: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      `${this.API_URL}/set_state`,
      { state: newState },
      { headers }
    );
  }

  setSemaphoreFreq(frequency: number, semaphore: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { freq: frequency, semaforo: semaphore };

    return this.http.post(`${this.API_URL}/set_freq`, body, { headers });
  }
}
