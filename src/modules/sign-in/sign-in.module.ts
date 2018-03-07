import {NgModule} from '@angular/core';
import {SIGNIN_ROUTES} from './routes';
import {SIGNIN_COMPONENTS} from './components';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    ...SIGNIN_COMPONENTS,
  ],
  imports: [
    RouterModule.forChild(SIGNIN_ROUTES),
    AngularFireAuthModule,
    SharedModule,
  ],
  providers: [AuthService]
})
export class SignInModule {
}
