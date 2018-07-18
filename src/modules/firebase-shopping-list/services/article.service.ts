import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Article} from './../models/article.model';
import {Observable} from 'rxjs';
import {FirebaseCollectionService} from './firebase.collection.service';
import {map} from 'rxjs/operators';
import {List} from '../models/list.model';

@Injectable()
export class ShoppingArticleService extends FirebaseCollectionService {
  articles: Observable<Article[]>;

  constructor(public afs: AngularFirestore) {
    super(afs, 'articles');
  }

  createEmptyModel() {
    return new Article();
  }

  getItems() {
    return this.collection.snapshotChanges().pipe(
      map(values => values.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        const item = new Article();
        item.parseData(id, data);
        return item;
      }))
    );
  }

  getItemById(id: string): Promise<Article> {
    return new Promise((resolve => {
      this.collection.doc(id).ref.onSnapshot(doc => {
        const data = doc.data();
        const idItem = doc.id;
        const item = new Article();
        item.parseData(idItem, data);
        resolve(item);
      });
    }));
  }

  search(q: string) {
    const searchCollection = this.afs.collection<Article>('articles', ref => ref.where('name', '==', q));
    return searchCollection.snapshotChanges().pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        const item = new Article();
        item.parseData(id, data);
        return item;
      }))
    );
  }

  add(newArticle: Article): Promise<Article> {
    return new Promise((resolve, reject) => {
      const mySearch = this.search(newArticle.name).subscribe(data => {
        mySearch.unsubscribe();
        if (data.length === 0) {
          super.add(newArticle).then(() => {
            resolve(newArticle);
          }, (reason) => {
            reject(reason);
          });
        } else {
          reject('this name is already used to article');
        }
      });
    });
  }

  update(articleUpdated: Article): Promise<Article> {
    return new Promise((resolve, reject) => {
      const mySearch = this.search(articleUpdated.name).subscribe(data => {
        mySearch.unsubscribe();
        if (data.length === 0 || (data.length === 1 && data[0].id === articleUpdated.id)) {
          super.update(articleUpdated).then(() => {
            resolve(articleUpdated);
          }, (reason) => {
            reject(reason);
          });
        } else {
          reject('this name is already used to article');
        }
      });
    });
  }
}
