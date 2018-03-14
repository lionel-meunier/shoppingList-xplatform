import {Component, OnInit} from '@angular/core';
import {ShoppingArticleService} from '../../firebase-shopping-list/services/article.service';
import {MatSnackBar, MatTableDataSource} from '@angular/material';
import {ItemInterface} from '../../app/models/item.interface';
import {Observable} from 'rxjs/Observable';
import {Article} from '../../firebase-shopping-list/models/article.model';
import {NgForm} from '@angular/forms';
import {FirebaseCollectionService} from '../services/firebase.collection.service';
import {ItemCollectionInterface} from '../models/item.collection.interface';

@Component({
  selector: 'app-add-firebase',
  templateUrl: 'add-firebase.component.html'
})
export class AddFirebaseComponent {
  newData: ItemCollectionInterface;

  constructor(private dataService: FirebaseCollectionService,
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
