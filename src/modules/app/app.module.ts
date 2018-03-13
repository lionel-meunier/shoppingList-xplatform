import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {ROUTES} from './routes';
import {APP_SERVICES} from './services';
import {APP_COMPONENTS} from './components';
import {RootComponent} from './components/root/root.component';
import {APP_DIRECTIVES} from './directives';
import {environment} from '../../environments/environment';
import {SharedModule} from '../shared/shared.module';
import {NavbarModule} from '../navbar/navbar.module';
import {BrowserModule} from '@angular/platform-browser';
import {CameraModule} from '../camera/camera.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {MatInputModule, MatButtonModule, MatTableModule, MatMenuModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production && environment.serviceWorkerEnabled}),
    RouterModule.forRoot(ROUTES, {useHash: true}),
    AngularFireModule.initializeApp(environment.firebase, 'shopping-list'),
    AngularFireStorageModule,
    AngularFireAuthModule,
    SharedModule.forRoot(),
    CameraModule.forRoot(),
    NavbarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  bootstrap: [RootComponent],
  providers: [APP_SERVICES, AngularFirestore],
})
export class AppModule {
}
