import {Component, OnInit} from '@angular/core';
import {MatSnackBar, MatTableDataSource} from '@angular/material';
import {AddFirebaseComponent} from '../../firebase-shopping-list/component/add-firebase.component';
import {NgForm} from '@angular/forms';
import {ShoppingAllListService} from '../../firebase-shopping-list/services/shopping.all.list.service';

@Component({
  selector: 'app-add-item',
  templateUrl: 'add-item.component.html'
})
export class AddItemComponent extends AddFirebaseComponent {

  constructor(private listService: ShoppingAllListService, public snackBar: MatSnackBar) {
    super(listService, snackBar);
  }

  public onCreate(formCreate: NgForm): void {
    super.onCreate(formCreate);
  }
}
