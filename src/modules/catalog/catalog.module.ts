import {NgModule} from '@angular/core';
import {CATALOG_ROUTES} from './routes';
import {RouterModule} from '@angular/router';
import {CatalogComponent} from './components/catalog.component';
import {FirebaseShoppingListModule} from '../firebase-shopping-list/firebase-shopping-list.module';
import {SharedModule} from '../shared/shared.module';
import {AddArticleComponent} from './components/add.article.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule, MatDialogModule, MatInputModule, MatListModule,
  MatSnackBarModule
} from '@angular/material';
import {DeleteArticleDialogComponent} from './components/delete.article.dialog';
import {AddPictureArticleDialogComponent} from './components/add-picture-article.dialog';
import {CameraModule} from '../camera/camera.module';

@NgModule({
  declarations: [
    AddArticleComponent,
    DeleteArticleDialogComponent,
    AddPictureArticleDialogComponent,
    CatalogComponent
  ],
  imports: [
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule,
    SharedModule,
    RouterModule.forChild(CATALOG_ROUTES),
    CameraModule.forRoot(),
    FirebaseShoppingListModule
  ],
  entryComponents: [DeleteArticleDialogComponent, AddPictureArticleDialogComponent],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class CatalogModule {
}
