import {NgModule} from '@angular/core';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../../environments/environment';
import {ShoppingArticleService} from './services/article.service';
import {ShoppingListService} from './services/shopping.list.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AddFirebaseComponent} from './component/add-firebase.component';
import {MatButtonModule, MatDialogModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {ShoppingAllListService} from './services/shopping.all.list.service';

@NgModule({
  declarations: [
    AddFirebaseComponent
  ],
  imports: [
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, 'shopping-list'),
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [
    AngularFirestore,
    ShoppingArticleService,
    ShoppingAllListService,
    ShoppingListService
  ],
})
export class FirebaseShoppingListModule {
}
