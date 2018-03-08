import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import * as firebase from 'firebase/app';

@Component({
  templateUrl: 'sign-in.component.html'
})
export class SignInComponent {

  public userDetails: firebase.User = null;
  public error: Object = null;

  constructor(private _authService: AuthService) {
  }

  signInWithGoogle(): void {
    this._authService.signInWithGoogle().catch((error) => {
      this.error = error;
    });
  }

  isLoggedIn(): boolean {
    const isLogged = this._authService.isLoggedIn();
    if (isLogged) {
      this.userDetails = this._authService.userDetails;
    }
    return isLogged;
  }

  logout(): void {
    this._authService.logout();
  }
}
