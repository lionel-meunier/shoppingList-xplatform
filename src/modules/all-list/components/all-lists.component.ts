import {Component, OnInit} from '@angular/core';
import {List} from '../../firebase-shopping-list/models/list.model';
import {ShoppingAllListService} from '../../firebase-shopping-list/services/shopping.all.list.service';

@Component({
  templateUrl: 'all-lists.component.html'
})
export class AllListsComponent implements OnInit {

  lists: List[];

  constructor(private listService: ShoppingAllListService) {
  }

  ngOnInit() {
    this.listService.getItems().subscribe(data => {
      this.lists = data;
    });
  }

}
