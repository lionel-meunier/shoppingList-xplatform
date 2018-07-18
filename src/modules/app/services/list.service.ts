import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Item} from './../models/item.model';
import {ItemInterface} from './../models/item.interface';
import {Observable} from 'rxjs';

@Injectable()
export class ListService {
  itemsCollection: AngularFirestoreCollection<ItemInterface>;
  items: Observable<ItemInterface[]>;

  constructor(public afs: AngularFirestore) {
    this.itemsCollection = afs.collection<ItemInterface>('items');
  }

  getItems() {
    this.itemsCollection.valueChanges().subscribe( (data) => {
      console.log(data);
    });

    // return this.itemsCollection.valueChanges().subscribe().map(changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data() as ItemInterface;
    //     const id = a.payload.doc.id;
    //     const item = new Item();
    //     item.parse(id, data);
    //     return item;
    //   });
    // });
  }

  add(newItem: ItemInterface) {
    const item: any = {
      nbr: newItem.nbr,
      name: newItem.name
    };
    this.itemsCollection.add(item);
  }

  update(item: ItemInterface) {
    this.itemsCollection.doc(item.id).update(item.exportData());
  }

  delete(item: ItemInterface) {
    this.itemsCollection.doc(item.id).delete();
  }

}
