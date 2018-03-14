import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppNavbarComponent} from './components/app-navbar/app-navbar.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule, MatMenuModule, MatButtonModule} from '@angular/material';
import {UIRouterModule} from '@uirouter/angular';

@NgModule({
  declarations : [
    AppNavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    UIRouterModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports : [
    AppNavbarComponent
  ]
})
export class NavbarModule {
}
