import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Article} from '../../firebase-shopping-list/models/article.model';

@Component({
  selector: 'app-add-picture-article-dialog',
  templateUrl: 'add-picture-article.dialog.html',
})
export class AddPictureArticleDialogComponent {

  public article: Article;

  constructor(public dialogRef: MatDialogRef<AddPictureArticleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.article = data.article;
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  addPicture(refPicture: string): void {
    this.dialogRef.close(refPicture);
  }

}

