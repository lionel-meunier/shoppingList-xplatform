import {NgModule} from '@angular/core';
import {ALL_LIST_ROUTES} from './routes';
import {RouterModule} from '@angular/router';
import {FirebaseShoppingListModule} from '../firebase-shopping-list/firebase-shopping-list.module';
import {SharedModule} from '../shared/shared.module';
import {AllListsComponent} from './components/all-lists.component';
import {MatButtonModule, MatDialogModule, MatInputModule, MatListModule, MatSnackBarModule} from '@angular/material';
import {AddListComponent} from './components/add-list.component';
import {DeleteListDialogComponent} from './components/delete.list.dialog';
import {UpdateListDialogComponent} from './components/update.list.dialog';

@NgModule({
  declarations: [
    AddListComponent,
    AllListsComponent,
    DeleteListDialogComponent,
    UpdateListDialogComponent
  ],
  imports: [
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    SharedModule,
    RouterModule.forChild(ALL_LIST_ROUTES),
    FirebaseShoppingListModule
  ],
  entryComponents: [
    DeleteListDialogComponent,
    UpdateListDialogComponent
  ],
})
export class AllListModule {
}
