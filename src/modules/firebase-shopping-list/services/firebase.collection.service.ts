import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {ItemCollectionInterface} from '../models/item.collection.interface';


@Injectable()
export class FirebaseCollectionService {
  collection: AngularFirestoreCollection<ItemCollectionInterface>;
  items: Observable<ItemCollectionInterface[]>;

  constructor(public afs: AngularFirestore, pathItems: string) {
    this.collection = afs.collection<ItemCollectionInterface>(pathItems);
  }

  getItems() {
  }

  add(newItem: ItemCollectionInterface) {
    return new Promise((resolve, reject) => {
      this.collection.add(newItem.exportData()).then(data => {
        resolve(data);
      }, reason => {
        reject(reason);
      })
    });
  }

  async update(updatedItem: ItemCollectionInterface) {
    return this.collection.doc(updatedItem.id).update(updatedItem.exportData());
  }

  async delete(deletedItem: ItemCollectionInterface) {
    return this.collection.doc(deletedItem.id).delete();
  }

}