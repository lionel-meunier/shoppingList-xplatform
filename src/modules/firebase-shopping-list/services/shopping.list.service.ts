import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {List} from './../models/list.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ShoppingListService {
  listsCollection: AngularFirestoreCollection<List>;
  lists: Observable<List[]>;

  constructor(public afs: AngularFirestore) {
    this.listsCollection = afs.collection<List>('items');
  }

  getItems() {
    return this.listsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as List;
        const id = a.payload.doc.id;
        console.log(data);
        return data;
      });
    });
  }

  add(newList: List) {
    this.listsCollection.add(newList);
  }

  update(list: List) {
    this.listsCollection.doc(list.id).update(list);
  }

  delete(list: List) {
    this.listsCollection.doc(list.id).delete();
  }

}
