import {ItemCollectionInterface} from './item.collection.interface';

export class Article implements ItemCollectionInterface {
  id: string;
  name: string;

  constructor() {
  }

  parseData(id, data): void {
    this.id = id;
    this.name = data.name;
  }

  exportData(): any {
    return {
      name: this.name
    };
  }
}
