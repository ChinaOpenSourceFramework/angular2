import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'message', component: MessageComponent }
];

