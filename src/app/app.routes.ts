import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { ChatsComponent } from './chats/chats.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ScheduleMessageComponent } from './schedule-message/schedule-message.component';
import { ScheduledListComponent } from './scheduled-list/scheduled-list.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingComponent },
  { path: 'Schedule', component: ScheduleMessageComponent },
  { path: 'scheduled-list', component: ScheduledListComponent },
  { path: 'send-message', component: SendMessageComponent },
  { path: 'Contacts', component: ContactsComponent },
  { path: '**', component: NotFoundComponent },
];
