import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {List} from '../../firebase-shopping-list/models/list.model';
import {NgForm} from '@angular/forms';
import {ShoppingAllListService} from '../../firebase-shopping-list/services/shopping.all.list.service';

@Component({
  selector: 'app-update-list-dialog',
  templateUrl: 'update.list.dialog.html',
})
export class UpdateListDialogComponent {

  public list: List;

  constructor(public dialogRef: MatDialogRef<UpdateListDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private listService: ShoppingAllListService,
              public snackBar: MatSnackBar) {
    this.list = new List();
    this.list.parseData(data.list.id, data.list.exportData());
  }

  onUpdate(formUpdate: NgForm): void {
    if (formUpdate.valid === true) {
      this.listService.update(this.list).then(() => {
        this.dialogRef.close(true);
      }, (reason) => {
        this.snackBar.open(reason, null, {
          duration: 2000,
        });
      });
    }
  }

}

