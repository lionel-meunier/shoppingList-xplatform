import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {ItemCollectionInterface} from '../models/item.collection.interface';
import {AngularFireList} from 'angularfire2/database';
import {FirebaseCollectionServiceInterface} from './firebase.collection.service.interface';


@Injectable()
export class FirebaseCollectionService implements FirebaseCollectionServiceInterface {
  collection: AngularFirestoreCollection<ItemCollectionInterface>;
  items: Observable<ItemCollectionInterface[]>;

  constructor(public afs: AngularFirestore, pathItems: string) {
    this.collection = afs.collection<ItemCollectionInterface>(pathItems);
  }

  createEmptyModel(): ItemCollectionInterface {
    throw new Error('return object is necessary');
  }

  getItems(): Observable<ItemCollectionInterface[]> {
    return new Observable();
  }

  add(newItem: ItemCollectionInterface): Promise<any> {
    return new Promise((resolve, reject) => {
      this.collection.add(newItem.exportData()).then(data => {
        resolve(data);
      }, reason => {
        reject(reason);
      });
    });
  }

  async update(updatedItem: ItemCollectionInterface): Promise<any> {
    return this.collection.doc(updatedItem.id).update(updatedItem.exportData());
  }

  async delete(deletedItem: ItemCollectionInterface): Promise<any> {
    return this.collection.doc(deletedItem.id).delete();
  }

}
