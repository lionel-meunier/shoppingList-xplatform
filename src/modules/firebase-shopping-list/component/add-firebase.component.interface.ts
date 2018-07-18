import {FirebaseCollectionServiceInterface} from '../services/firebase.collection.service.interface';
import {ItemCollectionInterface} from '../models/item.collection.interface';
import {NgForm} from '@angular/forms';

export interface AddFirebaseComponentInterface {
  dataService: FirebaseCollectionServiceInterface;
  newData: ItemCollectionInterface;

  onCreate(formCreate: NgForm): void;
}
