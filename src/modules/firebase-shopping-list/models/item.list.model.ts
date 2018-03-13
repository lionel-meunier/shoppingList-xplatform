import {ItemListInterface} from './item.list.interface';

export class ItemList implements ItemListInterface {
  id: string;
  nbr: number;
  name: string;
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

  parse(id, data) {
    this.id = id;
    this.name = data.name;
    this.nbr = data.nbr;
    this.check = data.check;
  }

  exportData() {
    return {
      name: this.name,
      nbr: this.nbr,
      check: this.check
    };
  }
}
