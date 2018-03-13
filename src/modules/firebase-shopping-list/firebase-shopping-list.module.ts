import {NgModule} from '@angular/core';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../../environments/environment';
import {ShoppingArticleService} from './services/article.service';

@NgModule({
  declarations: [
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'shopping-list'),
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [
    AngularFirestore,
    ShoppingArticleService
  ],
})
export class FirebaseShoppingListModule {
}
