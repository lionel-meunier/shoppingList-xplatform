import {Component, OnInit} from '@angular/core';
import {List} from '../../firebase-shopping-list/models/list.model';
import {ShoppingAllListService} from '../../firebase-shopping-list/services/shopping.all.list.service';
import {MatDialog} from '@angular/material';
import {DeleteListDialogComponent} from './delete.list.dialog';
import {UpdateListDialogComponent} from './update.list.dialog';

@Component({
  templateUrl: 'all-lists.component.html',
  styleUrls: ['all-lists.component.scss'],
})
export class AllListsComponent implements OnInit {

  lists: List[];

  constructor(public dialog: MatDialog,
              private listService: ShoppingAllListService) {
  }

  ngOnInit() {
    this.listService.getItems().subscribe(data => {
      this.lists = data;
    });
  }

  onDelete(list: List) {
    this.dialog.open(DeleteListDialogComponent, {
      data: {list: list}
    });
  }

  onUpdate(list: List) {
    this.dialog.open(UpdateListDialogComponent, {
      data: {list: list}
    });
  }
}
