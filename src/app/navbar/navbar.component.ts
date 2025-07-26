import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule,
    ButtonModule,
    RippleModule
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() isLoggedIn = false;

  items = [
    { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
    { label: 'Settings', icon: 'pi pi-cog', routerLink: '/settings' },
    { label: 'Chats', icon: 'pi pi-comments', routerLink: '/chats' },
    { label: 'Schedule', icon: 'pi pi-calendar-plus', routerLink: '/schedule' },
    { label: 'Scheduled List', icon: 'pi pi-list', routerLink: '/scheduled-list' },
    { label: 'Contacts', icon: 'pi pi-users', routerLink: '/contacts' },
    { label: 'Send Message', icon: 'pi pi-send', routerLink: '/send-message' },
  ];

  constructor(public router: Router) {}
}
