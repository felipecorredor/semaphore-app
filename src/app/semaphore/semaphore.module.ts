import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemaphoreComponent } from './semaphore/semaphore.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SemaphoreComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SemaphoreModule {}
