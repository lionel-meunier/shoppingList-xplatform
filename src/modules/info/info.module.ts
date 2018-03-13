import {NgModule} from '@angular/core';
import {INFO_ROUTES} from './routes';
import {INFO_COMPONENTS} from './components';
import {RouterModule} from '@angular/router';
import {INFO_SERVICES} from './services';
import {SharedModule} from '../shared/shared.module';
import {MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    ...INFO_COMPONENTS,
  ],
  imports: [
    RouterModule.forChild(INFO_ROUTES),
    SharedModule,
    MatCheckboxModule
  ],
  providers: INFO_SERVICES,
})
export class InfoModule {
}
