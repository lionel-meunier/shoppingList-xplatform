import {NgModule} from '@angular/core';
import {CATALOG_ROUTES} from './routes';
import {RouterModule} from '@angular/router';
import {CatalogComponent} from './components/catalog/catalog.component';
import {FirebaseShoppingListModule} from '../firebase-shopping-list/firebase-shopping-list.module';
import {SharedModule} from '../shared/shared.module';
import {AddArticleComponent} from './components/catalog/add.article.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule, MatDialogModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {DeleteArticleDialogComponent} from './components/catalog/delete.article.dialog';

@NgModule({
  declarations: [
    AddArticleComponent,
    DeleteArticleDialogComponent,
    CatalogComponent
  ],
  imports: [
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    SharedModule,
    RouterModule.forChild(CATALOG_ROUTES),
    FirebaseShoppingListModule
  ],
  entryComponents: [DeleteArticleDialogComponent],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class CatalogModule {
}
