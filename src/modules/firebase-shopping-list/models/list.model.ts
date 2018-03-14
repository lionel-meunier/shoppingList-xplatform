import {ItemCollectionInterface} from './item.collection.interface';

export class List implements ItemCollectionInterface {
  id: string;
  name: string;
  nbr: number;

  constructor() {
  }

  parseData(id, data): void {
    this.id = id;
    this.name = data.name;
    this.nbr = Array.isArray(data.items) ? data.items.length : 0;
  }

  exportData(): any {
    return {
      name: this.name
    };
  }
}
