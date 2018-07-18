import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {List} from './../models/list.model';
import {Observable} from 'rxjs';
import {FirebaseCollectionService} from './firebase.collection.service';
import {map} from 'rxjs/operators';

@Injectable()
export class ShoppingAllListService extends FirebaseCollectionService {

  constructor(public afs: AngularFirestore) {
    super(afs, 'lists');
  }

  createEmptyModel(): List {
    return new List();
  }

  getItems(): Observable<List[]> {
    return this.collection.snapshotChanges().pipe(
      map(values => values.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        const item = new List();
        item.parseData(id, data);
        return item;
      }))
    );
  }

  getItemById(id: string): Promise<List> {
    return new Promise((resolve => {
      this.collection.doc(id).ref.onSnapshot(doc => {
        const data = doc.data();
        const id = doc.id;
        const item = new List();
        item.parseData(id, data);
        resolve(item);
      });
    }));
  }
}
