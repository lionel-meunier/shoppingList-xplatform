import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {List} from './../models/list.model';
import {Observable} from 'rxjs/Observable';
import {FirebaseCollectionService} from './firebase.collection.service';
import {Article} from '../models/article.model';

@Injectable()
export class ShoppingAllListService extends FirebaseCollectionService {
  listsCollection: AngularFirestoreCollection<List>;
  lists: Observable<List[]>;

  constructor(public afs: AngularFirestore) {
    super(afs, 'lists');
  }

  createEmptyModel(): List {
    return new List();
  }

  getItems() {
    return this.collection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        const item = new List();
        item.parseData(id, data);
        return item;
      });
    });
  }

}
