import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {List} from '../../firebase-shopping-list/models/list.model';
import {ShoppingAllListService} from '../../firebase-shopping-list/services/shopping.all.list.service';

@Component({
  selector : 'app-delete-list-dialog',
  templateUrl: 'delete.list.dialog.html',
})
export class DeleteListDialogComponent {

  public list: List;

  constructor(
    public dialogRef: MatDialogRef<DeleteListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private listService: ShoppingAllListService,
    public snackBar: MatSnackBar) {
    this.list = data.list;
  }

  onDelete(): void {
    this.listService.delete(this.list).then(() => {
      this.dialogRef.close(true);
    }, (reason) => {
      this.snackBar.open(reason, null, {
        duration: 2000,
      });
    });
  }

}

