import {Routes} from '@angular/router';
import {ItemsListComponent} from './components/items-list.component';

export const ALL_ITEM_LIST_ROUTES: Routes = [
  {
    path: '',
    component: ItemsListComponent,
    data: {
      title: 'Items',
    },
  }
];
