import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { SemaphoreService } from '../semaphore.service';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-semaphore',
  templateUrl: './semaphore.component.html',
})
export class SemaphoreComponent {
  submitted = false;

  constructor(private semaphoreService: SemaphoreService) {}

  semaphoreForm = new FormGroup({
    frequency: new FormControl(''),
    selectedSemaphore: new FormControl('1'),
  });

  private subscriptions: Subscription[] = [];

  get f(): { [key: string]: AbstractControl } {
    return this.semaphoreForm.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.semaphoreForm.reset();
  }

  sendStateSemaphore(state: number) {
    const subscription = this.semaphoreService
      .setSemaphoreState(state)
      .subscribe({
        next: (response) => {
          console.log('Estado del semáforo enviado con éxito:', response);
        },
        error: (error) => {
          console.error('Error al enviar el estado del semáforo:', error);
        },
      });

    this.subscriptions.push(subscription);
  }

  onSubmit(): void {
    this.submitted = true;

    const frequency = Number(this.semaphoreForm.value.frequency) as number;
    const selectedSemaphore = Number(
      this.semaphoreForm.value.selectedSemaphore
    ) as number;

    const subscription = this.semaphoreService
      .setSemaphoreFreq(frequency, selectedSemaphore)
      .subscribe({
        next: (response) => {
          console.log('Estado del semáforo enviado con éxito:', response);
        },
        error: (error) => {
          console.error('Error al enviar el estado del semáforo:', error);
        },
      });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
