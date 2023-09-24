import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private readonly formBuilder: FormBuilder
  ) {}

  private subscriptions: Subscription[] = [];

  submitted = false;
  errorMessage: string | null = null;

  profileForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    this.profileForm = this.initForm();
  }

  onSubmit() {
    this.submitted = true;

    const userName = this.profileForm.value.userName as string;
    const password = this.profileForm.value.password as string;

    const subscription = this.loginService.login(userName, password).subscribe({
      next: (response) => {
        console.log('Response', response);
        localStorage.setItem('access_token', response.access_token);
        this.router.navigate(['/semaphore']);
        this.loginService.loginSuccessEvent.emit(true);
      },
      error: (error) => {
        console.error('Error login:', error);
        this.errorMessage = 'Credenciales invalidas, intenta de nuevo';
      },
    });

    this.subscriptions.push(subscription);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.profileForm.controls;
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
