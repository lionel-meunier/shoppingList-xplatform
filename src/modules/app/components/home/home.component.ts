import {Component, ViewChild, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Item} from '../../models/item.model';
import {ItemInterface} from '../../models/item.interface';
import {ListService} from '../../services/list.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedColumns = ['check', 'name', 'nbr', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private itemsCollection: AngularFirestoreCollection<ItemInterface>;
  items: Observable<ItemInterface[]>;
  dataSource = new MatTableDataSource();
  newItem: Item;

  constructor(private _authService: AuthService, private listService: ListService) {
    this.newItem = new Item();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.listService.getItems().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  isLoggedIn(): boolean {
    const isLogged = this._authService.isLoggedIn();
    return isLogged;
  }

  public onCreate(formCreate: NgForm): void {
    if (formCreate.valid === true) {
      this.listService.add(this.newItem);
    }
  }

  public onUpdate(formUpdate: NgForm, item: ItemInterface): void {
    if (formUpdate.valid === true) {
      item.edit = false;
      this.listService.update(item);
    }
  }

  public onChange(item: ItemInterface): void {
    this.listService.update(item);
  }

  public onDelete(item: ItemInterface): void {
    this.listService.delete(item);

  }
}
