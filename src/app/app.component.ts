import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'profundizacionII';

  token = localStorage.getItem('access_token');

  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.loginSuccessEvent.subscribe((success: boolean) => {
      if (success) {
        this.token = localStorage.getItem('access_token');
      }
    });
  }

  ngOnInit(): void {
    if (this.token) {
      this.router.navigate(['/semaphore']);
      return;
    }
    this.router.navigate(['/login']);
  }

  logOut() {
    this.token = null;
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
