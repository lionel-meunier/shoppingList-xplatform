import {Routes} from '@angular/router';
import {CatalogComponent} from './components/catalog/catalog.component';

export const CATALOG_ROUTES: Routes = [
  {
    path: '',
    component: CatalogComponent,
    data: {
      title: 'Catalogue',
    },
  }
];
