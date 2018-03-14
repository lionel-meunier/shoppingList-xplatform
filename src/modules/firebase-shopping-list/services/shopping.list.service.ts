import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {ItemList} from '../models/item.list.model';
import {ItemCollectionInterface} from '../models/item.collection.interface';
import {ShoppingAllListService} from './shopping.all.list.service';
import {List} from '../models/list.model';
import {Observable} from 'rxjs/Observable';
import {Article} from '../models/article.model';

@Injectable()
export class ShoppingListService {
  collection: AngularFirestoreCollection<ItemCollectionInterface>;

  constructor(public afs: AngularFirestore, private allListService: ShoppingAllListService) {
  }

  createEmptyModel(): ItemList {
    return new ItemList();
  }

  getItems(idList: string) {
    return Observable.fromPromise(this.allListService.getItemById(idList).then((list: List) => {
      list.itemsRef.forEach((dataItems) => {
        const item = new ItemList();
        dataItems.ref.get().then(docRef => {
          const article = new Article();
          article.parseData(docRef.id, docRef.data());
          item.addRef(article);
        });
        list.items.push(item);
      });
      return list.items;
    }));
  }

}
