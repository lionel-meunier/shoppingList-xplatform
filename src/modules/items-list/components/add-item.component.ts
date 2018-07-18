import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {AddFirebaseComponent} from '../../firebase-shopping-list/component/add-firebase.component';
import {FormControl, NgForm} from '@angular/forms';
import {ShoppingArticleService} from '../../firebase-shopping-list/services/article.service';
import {Article} from '../../firebase-shopping-list/models/article.model';
import {Observable, Subscriber} from 'rxjs';
import {ShoppingListService} from '../../firebase-shopping-list/services/shopping.list.service';
import {ItemList} from '../../firebase-shopping-list/models/item.list.model';
import {AddFirebaseComponentInterface} from '../../firebase-shopping-list/component/add-firebase.component.interface';
import {List} from '../../firebase-shopping-list/models/list.model';

@Component({
  selector: 'app-add-item',
  templateUrl: 'add-item.component.html'
})
export class AddItemComponent implements OnInit, AddFirebaseComponentInterface {

  autoCompleteControl: FormControl = new FormControl();
  articles: Article[];
  newData: ItemList;
  articlesFiltered: Observable<Article[]>;
  articlesFilteredObserver: Subscriber<Article[]>;
  @Input('aqf-current-list') currentList: List;

  constructor(public dataService: ShoppingListService,
              private articleService: ShoppingArticleService,
              public snackBar: MatSnackBar) {
    this.newData = dataService.createEmptyModel();
  }

  ngOnInit() {
    this.articleService.getItems().subscribe(data => {
      this.articles = data;
      this.articlesFiltered = new Observable<Article[]>(observer => {
        this.articlesFilteredObserver = observer;
        this.articlesFilteredObserver.next(this.filterArticle(''));
      });
      this.autoCompleteControl.valueChanges.subscribe(term => {
        this.articlesFilteredObserver.next(this.filterArticle(term));
      });
    });
    this.newData.addParent(this.currentList);
  }

  filterArticle(val: string): Article[] {
    return this.articles.filter((article) => {
      return article.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
    });
  }

  selectedArticle(article: Article) {
    this.newData.addRef(article);
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

  displayArticle(article: Article): string | undefined {
    return (article) ? article.name : undefined;
  }
}
