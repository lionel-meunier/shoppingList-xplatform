import {Component} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {NgForm} from '@angular/forms';

export interface Item {
  id: string;
  name: string;
  edit: boolean;
}

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        console.log(a.payload.doc.id);
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  public onCreate(formCreate: NgForm): void {
    if (formCreate.valid === true) {
      const name: string = formCreate.value.name;
      const edit = false;
      const item: any = {name, edit};
      this.itemsCollection.add(item);
    }
  }

  public onUpdate(formUpdate: NgForm, item: Item): void {
    if (formUpdate.valid === true) {
      console.log(this.itemsCollection.doc(item.id));
      item.edit = false;
      this.itemsCollection.doc(item.id).update(item);
    }
  }

  public onDelete(item: Item): void {
      this.itemsCollection.doc(item.id).delete();
  }
}
