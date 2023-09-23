import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { SemaphoreService } from '../semaphore.service';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-semaphore',
  templateUrl: './semaphore.component.html',
})
export class SemaphoreComponent implements OnInit {
  semaphoreForm: FormGroup;

  submitted = false;

  constructor(private semaphoreService: SemaphoreService) {
    this.semaphoreForm = new FormGroup({
      frequency: new FormControl(''),
      selectedSemaphore: new FormControl(''),
    });
  }

  private subscriptions: Subscription[] = [];

  ngOnInit() {}

  get f(): { [key: string]: AbstractControl } {
    return this.semaphoreForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    console.warn(this.semaphoreForm.value);

    if (this.semaphoreForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.semaphoreForm.value, null, 2));
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

  changeState(): void {
    // const subscription = this.semaphoreService
    //   .setSemaphoreFreq(this.frequency, this.selectedSemaphore)
    //   .subscribe({
    //     next: (response) => {
    //       console.log('Estado del semáforo enviado con éxito:', response);
    //     },
    //     error: (error) => {
    //       console.error('Error al enviar el estado del semáforo:', error);
    //     },
    //   });
    // this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
