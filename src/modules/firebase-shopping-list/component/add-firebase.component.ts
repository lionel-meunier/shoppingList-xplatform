import {Component, OnInit} from '@angular/core';
import {MatSnackBar, MatTableDataSource} from '@angular/material';
import {NgForm} from '@angular/forms';
import {ItemCollectionInterface} from '../models/item.collection.interface';
import {FirebaseCollectionService} from '../services/firebase.collection.service';
import {AddFirebaseComponentInterface} from './add-firebase.component.interface';

@Component({
  selector: 'app-add-firebase',
  templateUrl: 'add-firebase.component.html'
})
export class AddFirebaseComponent implements AddFirebaseComponentInterface {
  newData: ItemCollectionInterface;

  constructor(public dataService: FirebaseCollectionService,
              public snackBar: MatSnackBar) {
    this.newData = dataService.createEmptyModel();
  }

  public onCreate(formCreate: NgForm): void {
    if (formCreate.valid === true) {
      this.dataService.add(this.newData).then(() => {
        this.newData = this.dataService.createEmptyModel();
      }, reason => {
        this.snackBar.open(reason, null, {
          duration: 2000,
        });
      });
    }
  }
}
