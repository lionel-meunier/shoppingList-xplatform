import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {AUTH_USERS} from '../constants/auth-users.constant';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  public userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        console.log(user);
        //Replace with rules in firebase after
        if (user && AUTH_USERS.indexOf(user.email) !== -1) {
          this.userDetails = user;
          this.router.navigate(['/']);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  signInWithGoogle() {
    return new Promise((resolve, reject) => {
      this._firebaseAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      ).then((result) => {
        if (result.user && AUTH_USERS.indexOf(result.user.email) !== -1) {
          resolve();
        } else {
          this._firebaseAuth.auth.signOut();
          reject({message: 'forbiden permissions'});
        }
      }, () => {
        reject({message: 'error connection'});
      });
    });
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}
