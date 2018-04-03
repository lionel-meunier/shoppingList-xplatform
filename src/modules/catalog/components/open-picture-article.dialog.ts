import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Article} from '../../firebase-shopping-list/models/article.model';

@Component({
  selector: 'app-open-picture-article-dialog',
  templateUrl: 'open-picture-article.dialog.html',
})
export class OpenPictureArticleDialogComponent {

  public article: Article;

  constructor(public dialogRef: MatDialogRef<OpenPictureArticleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.article = data.article;
  }
}

