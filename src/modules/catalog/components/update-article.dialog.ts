import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {Article} from '../../firebase-shopping-list/models/article.model';
import {ShoppingArticleService} from '../../firebase-shopping-list/services/article.service';

@Component({
  selector: 'app-update-article-dialog',
  templateUrl: 'update-article.dialog.html',
})
export class UpdateArticleDialogComponent {

  public article: Article;

  constructor(public dialogRef: MatDialogRef<UpdateArticleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private articleService: ShoppingArticleService,
              public snackBar: MatSnackBar) {
    this.article = new Article();
    this.article.parseData(data.article.id, data.article.exportData());
  }

  onUpdate(): void {
    this.articleService.update(this.article).then(() => {
      this.dialogRef.close(true);
    }, (reason) => {
      this.snackBar.open(reason, null, {
        duration: 2000,
      });
    });
  }

}

