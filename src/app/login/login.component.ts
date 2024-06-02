import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
})
export class LoginComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    const { username, password } = this.form.value;
    if (username && password) {
      this.authService.login(username, password).subscribe(
        (data) => {
          localStorage.setItem('token', data.token);
          if (data.role === 'coach'){
            this.router.navigate(['/coaching']);
          }

          if (data.role === 'medical'){
            this.router.navigate(['/medical']);
          }
        },
        (error) => {
          alert('Ha fallado el inicio de sesión');
        }
      );
    }
  }
}
