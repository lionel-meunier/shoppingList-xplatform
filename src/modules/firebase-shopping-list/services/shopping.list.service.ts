import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {ItemList} from '../models/item.list.model';
import {ItemCollectionInterface} from '../models/item.collection.interface';
import {ShoppingAllListService} from './shopping.all.list.service';
import {List} from '../models/list.model';
import {from, Observable} from 'rxjs';
import {ShoppingArticleService} from './article.service';
import {FirebaseCollectionServiceInterface} from './firebase.collection.service.interface';
import {FirebaseCollectionService} from './firebase.collection.service';

@Injectable()
export class ShoppingListService implements FirebaseCollectionServiceInterface {
  collection: AngularFirestoreCollection<ItemCollectionInterface>;
  items: Observable<ItemList[]>;

  constructor(public afs: AngularFirestore,
              private allListService: ShoppingAllListService,
              private allArticleService: ShoppingArticleService) {
  }

  createEmptyModel(): ItemList {
    return new ItemList();
  }

  getListById(idList: string): Promise<List> {
    return this.allListService.getItemById(idList);
  }

  getItems(idList: string): Observable<ItemList[]> {
    return from(this.allListService.getItemById(idList).then((list: List) => {
      list.itemsRef.forEach((dataItem) => {
        const item = new ItemList();
        item.parseData(dataItem);
        list.items.push(item);
        this.allArticleService.getItemById(dataItem.article.id).then(article => {
          item.addRef(article);
        });
        item.addParent(list);
      });
      return list.items;
    }));
  }

  add(newItem: ItemList): Promise<ItemList> {
    console.log('add', newItem);

    //2 paramateres list and article for add item in list

    return new Promise((resolve, reject) => {

      // const mySearch = this.search(newArticle.name).subscribe(data => {
      //   mySearch.unsubscribe();
      //   if (data.length === 0) {
      //     super.add(newArticle).then(() => {
      //       resolve(newArticle);
      //     }, (reason) => {
      //       reject(reason);
      //     });
      //   } else {
      //     reject('this name is already used to article');
      //   }
      // });
    });
  }

  update() {

  }

  delete() {

  }

}
