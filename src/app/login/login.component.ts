import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  handleLogin(): void {
    console.log('handleLogin');
    const loginSuccess = true;

    console.warn(this.profileForm.value);

    if (loginSuccess) {
      console.log('Inicio de sesión exitoso');
      localStorage.setItem('token', JSON.stringify('your_token_here'));
      this.router.navigate(['/semaphore']);
      this.loginService.loginSuccessEvent.emit(true);
    } else {
      console.log('Inicio de sesión fallido');
    }
  }
}
