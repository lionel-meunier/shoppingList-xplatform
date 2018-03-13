import {Component} from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';

/**
 * Nav bar component
 * <example-url>http://frontend.aquafadas.com/modules/angular-aqf-actions/#!/</example-url>
 *
 * @example
 * <app-navbar></app-navbar>
 *
 */
@Component({
  selector: 'app-navbar',
  templateUrl: 'app-navbar.component.html',
  styleUrls: ['app-navbar.component.scss'],
})
export class AppNavbarComponent {
  constructor(private _authService: AuthService) {
  }

  /**
   * Close navbar if open
   */
  close() {
    console.log('close bar expanded');
  }

  isLoggedIn(): boolean {
    const isLogged = this._authService.isLoggedIn();
    return isLogged;
  }

  logout(): void {
    this._authService.logout();
  }
}
