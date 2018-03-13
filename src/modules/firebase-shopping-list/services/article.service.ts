import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Article} from './../models/article.model';
import {Observable} from 'rxjs/Observable';
import {FirebaseCollectionService} from './firebase.collection.service';
import {ItemCollectionInterface} from '../models/item.collection.interface';

@Injectable()
export class ShoppingArticleService extends FirebaseCollectionService {
  articlesCollection: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;

  constructor(public afs: AngularFirestore) {
    super(afs, 'articles');
  }

  getItems() {
    return this.collection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        const item = new Article();
        item.parseData(id, data);
        return item;
      });
    });
  }

  search(q: string) {
    const searchCollection = this.afs.collection<Article>('articles', ref => ref.where('name', '==', q));
    return searchCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        const item = new Article();
        item.parseData(id, data);
        return item;
      });
    });
  }

  async add(newArticle: Article) {
    return new Promise((resolve, reject) => {
      this.search(newArticle.name).subscribe(data => {
        if (data.length === 0) {
          super.add(newArticle).then(() => {
            resolve(data);
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
