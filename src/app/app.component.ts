import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'profundizacionII';

  token = localStorage.getItem('token');

  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.loginSuccessEvent.subscribe((success: boolean) => {
      if (success) {
        this.token = localStorage.getItem('token');
      }
    });
  }

  logOut() {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
