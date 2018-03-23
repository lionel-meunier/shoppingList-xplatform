export interface ItemCollectionInterface {
  id: string;
  name: string;
  parseData(id: string, data: object): void;

  exportData(): any;
}

