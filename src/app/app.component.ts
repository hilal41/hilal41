import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar [isLoggedIn]="isLoggedIn"></app-navbar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  get isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}
