import {Article} from './article.model';

export class ItemList {
  id: string;
  nbr: number;
  ref: Article;
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

  parseData(id, data) {
    this.id = id;
    this.nbr = data.nbr;
    this.check = data.check;
  }

  addRef(ref: Article) {
    this.ref = ref;
  }

  exportData() {
    return {
      nbr: this.nbr,
      check: this.check
    };
  }
}
