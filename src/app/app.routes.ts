import { Routes } from '@angular/router';
import { SignUpComponent } from './Pages/Auth/sign-up/sign-up.component';
import { SignInComponent } from './Pages/Auth/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
];
