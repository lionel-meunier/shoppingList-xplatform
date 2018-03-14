import {NgModule} from '@angular/core';
import {ALL_ITEM_LIST_ROUTES} from './routes';
import {RouterModule} from '@angular/router';
import {FirebaseShoppingListModule} from '../firebase-shopping-list/firebase-shopping-list.module';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule, MatDialogModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {ItemsListComponent} from './components/items-list.component';
import {AddItemComponent} from './components/add-item.component';

@NgModule({
  declarations: [
    AddItemComponent,
    ItemsListComponent
  ],
  imports: [
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    SharedModule,
    RouterModule.forChild(ALL_ITEM_LIST_ROUTES),
    FirebaseShoppingListModule
  ]
})
export class ItemsListModule {
}
