import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector : 'app-delete-article-dialog',
  templateUrl: 'delete.article.dialog.html',
})
export class DeleteArticleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteArticleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}

