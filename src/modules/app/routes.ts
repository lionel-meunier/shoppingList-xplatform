import {Ng2StateDeclaration, loadNgModule} from '@uirouter/angular';
import {HomeComponent} from './components/home/home.component';

export const ROUTES: Ng2StateDeclaration[] = [
  {
    name : 'main',
    url: '',
    redirectTo: '/home'
  },
  {
    name: 'main.home',
    component: HomeComponent,
    data: {
      title: 'ng-europe Demo',
    },
  },
  // {
  //   name: 'info',
  //   parent: 'main',
  //   lazyLoad : loadNgModule('modules/info/info.module')
  // },
  {
    name: 'signIn',
    parent: 'main',
    lazyLoad : () => {
      console.log('lazy load',  arguments);
      // loadNgModule(System.import('src/modules/sign-in/sign-in.module'))
    }
  },
  // {
  //   name: 'catalog',
  //   parent: 'main',
  //   lazyLoad : loadNgModule('modules/catalog/catalog.module')
  // },
  // {
  //   name: 'lists',
  //   parent: 'main',
  //   lazyLoad : loadNgModule('modules/all-list/all-list.module')
  // }
];
