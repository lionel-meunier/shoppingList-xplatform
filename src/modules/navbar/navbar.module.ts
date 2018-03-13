import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppNavbarComponent} from './components/app-navbar/app-navbar.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule, MatMenuModule, MatButtonModule} from '@angular/material';

@NgModule({
  declarations : [
    AppNavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule
  ],
  exports : [
    AppNavbarComponent
  ]
})
export class NavbarModule {
}
