import {Article} from './article.model';
import {List} from './list.model';
import {ItemCollectionInterface} from './item.collection.interface';

export class ItemList implements ItemCollectionInterface {
  id: string;
  nbr: number;
  ref: Article;
  parent: List;
  check: boolean;
  edit: boolean;

  constructor() {
    this.nbr = 1;
    this.edit = false;
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  toggleCheck() {
    this.check = !this.check;
  }

  parseData(data) {
    this.nbr = data.nbr;
    this.check = data.check ? data.check : false;
  }

  addRef(ref: Article) {
    this.ref = ref;
  }

  addParent(list: List) {
    this.parent = list;
  }

  exportData() {
    return {
      nbr: this.nbr,
      check: this.check
    };
  }
}
