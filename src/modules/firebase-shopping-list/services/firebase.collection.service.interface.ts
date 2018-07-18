import {ItemCollectionInterface} from '../models/item.collection.interface';

export interface FirebaseCollectionServiceInterface {
  createEmptyModel(): ItemCollectionInterface;
  add(newItem: ItemCollectionInterface): Promise<any>;
}

