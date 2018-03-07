import {NgModule} from '@angular/core';
import {SIGNIN_ROUTES} from './routes';
import {SIGNIN_COMPONENTS} from './components';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        ...SIGNIN_COMPONENTS,
    ],
    imports: [
        RouterModule.forChild(SIGNIN_ROUTES),
        SharedModule,
    ]
})
export class SignInModule {
}
