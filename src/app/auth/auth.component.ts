import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ButtonModule, InputTextModule],

  templateUrl: './auth.component.html',
})
export class AuthComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    console.log('Login data:', { email: this.email, password: this.password });
    localStorage.setItem('loggedIn', 'true');
    this.router.navigate(['/dashboard']);
  }
}
