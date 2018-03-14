import {AllListsComponent} from './components/all-lists.component';
import {Routes} from '@angular/router';

export const ALL_LIST_ROUTES: Routes = [
  {
    path: '',
    component: AllListsComponent,
    data: {
      title: 'Lists',
    },
  }
];
