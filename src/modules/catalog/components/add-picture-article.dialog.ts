import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {Article} from '../../firebase-shopping-list/models/article.model';
import {ShoppingArticleService} from '../../firebase-shopping-list/services/article.service';

@Component({
  selector: 'app-add-picture-article-dialog',
  templateUrl: 'add-picture-article.dialog.html',
})
export class AddPictureArticleDialogComponent {

  public article: Article;

  constructor(public dialogRef: MatDialogRef<AddPictureArticleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private articleService: ShoppingArticleService,
              public snackBar: MatSnackBar) {
    this.article = data.article;
  }

  addPicture(refPicture: string): void {
    this.article.pictureUrl = refPicture;
    this.articleService.update(this.article).then(() => {
      this.dialogRef.close(true);
    }, (reason) => {
      this.snackBar.open(reason, null, {
        duration: 2000,
      });
    });
  }

}

