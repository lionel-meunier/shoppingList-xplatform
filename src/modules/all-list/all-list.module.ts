import {NgModule} from '@angular/core';
import {ALL_LIST_ROUTES} from './routes';
import {RouterModule} from '@angular/router';
import {FirebaseShoppingListModule} from '../firebase-shopping-list/firebase-shopping-list.module';
import {SharedModule} from '../shared/shared.module';
import {AllListsComponent} from './components/all-lists.component';
import {MatButtonModule, MatDialogModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {AddListComponent} from './components/add-list.component';

@NgModule({
  declarations: [
    AddListComponent,
    AllListsComponent
  ],
  imports: [
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    SharedModule,
    RouterModule.forChild(ALL_LIST_ROUTES),
    FirebaseShoppingListModule
  ]
})
export class AllListModule {
}
