import {Routes} from '@angular/router';
import {SignInComponent} from './components/sign-in/sign-in.component';

export const SIGNIN_ROUTES: Routes = [
  {
    path: '',
    component: SignInComponent,
    data: {
      title: 'SignIn',
    },
  }
];
