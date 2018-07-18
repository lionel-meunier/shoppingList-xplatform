export interface ItemCollectionInterface {
  id: string;
  parseData(id: string, data: object): void;

  exportData(): any;
}

