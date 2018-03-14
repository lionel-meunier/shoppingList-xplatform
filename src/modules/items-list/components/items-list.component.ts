import {Component, OnInit} from '@angular/core';
import {ItemList} from '../../firebase-shopping-list/models/item.list.model';
import {ShoppingListService} from '../../firebase-shopping-list/services/shopping.list.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'items-list.component.html'
})
export class ItemsListComponent implements OnInit {

  idList: string;
  items: ItemList[];

  constructor(private route: ActivatedRoute, private listService: ShoppingListService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idList = params['idList']; // (+) converts string 'id' to a number
      this.listService.getItems(this.idList).subscribe(data => {
        this.items = data;
      });
    });

  }

}
