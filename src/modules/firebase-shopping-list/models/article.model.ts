import {ItemCollectionInterface} from './item.collection.interface';

export class Article implements ItemCollectionInterface {
  id: string;
  name: string;
  pictureUrl: string;

  constructor() {
  }

  parseData(id, data): void {
    this.id = id;
    this.name = data.name;
    this.pictureUrl = data.pictureUrl;
  }

  exportData(): any {
    return {
      name: this.name,
      pictureUrl : this.pictureUrl
    };
  }
}
