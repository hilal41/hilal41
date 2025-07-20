import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { ChatsComponent } from './chats/chats.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingComponent },
  { path: '**', component: NotFoundComponent },
];
