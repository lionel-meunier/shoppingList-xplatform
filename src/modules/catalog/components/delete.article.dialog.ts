import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {ShoppingArticleService} from '../../firebase-shopping-list/services/article.service';
import {Article} from '../../firebase-shopping-list/models/article.model';

@Component({
  selector : 'app-delete-article-dialog',
  templateUrl: 'delete.article.dialog.html',
})
export class DeleteArticleDialogComponent {

  public article: Article;

  constructor(
    public dialogRef: MatDialogRef<DeleteArticleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private articleService: ShoppingArticleService,
    public snackBar: MatSnackBar) {
    this.article = data.article;
  }

  onDelete(): void {
    this.articleService.delete(this.article).then(() => {
      this.dialogRef.close(true);
    }, (reason) => {
      this.snackBar.open(reason, null, {
        duration: 2000,
      });
    });
  }

}

