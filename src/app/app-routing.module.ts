import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { SemaphoreComponent } from './semaphore/semaphore/semaphore.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'semaphore', component: SemaphoreComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
