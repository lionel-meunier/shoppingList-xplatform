import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'ng-europe Demo',
    },
  },
  {
    path: 'info',
    loadChildren: 'modules/info/info.module#InfoModule'
  },
  {
    path: 'signIn',
    loadChildren: 'modules/sign-in/sign-in.module#SignInModule'
  },
  {
    path: 'catalog',
    loadChildren: 'modules/catalog/catalog.module#CatalogModule'
  },
  {
    path: 'lists',
    loadChildren: 'modules/all-list/all-list.module#AllListModule'
  }
];
