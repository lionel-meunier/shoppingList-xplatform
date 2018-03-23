import {Component, OnInit} from '@angular/core';
import {ShoppingArticleService} from '../../firebase-shopping-list/services/article.service';
import {MatDialog} from '@angular/material';
import {Article} from '../../firebase-shopping-list/models/article.model';
import {DeleteArticleDialogComponent} from './delete.article.dialog';
import {AddPictureArticleDialogComponent} from './add-picture-article.dialog';
import {AngularFireStorage} from 'angularfire2/storage';

@Component({
  templateUrl: 'catalog.component.html'
})
export class CatalogComponent implements OnInit {

  articles: Article[];

  constructor(public dialog: MatDialog,
              private articleService: ShoppingArticleService,
              private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this.articleService.getItems().subscribe(data => {
      this.articles = data;
    });
  }

  onDelete(article: Article) {
    const dialogRef = this.dialog.open(DeleteArticleDialogComponent, {
      data: {article: article}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.articleService.delete(article);
      }
    });
  }

  addPicture(article: Article) {
    const dialogRef = this.dialog.open(AddPictureArticleDialogComponent, {
      data: {article: article}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('addPicture', result);
      if(result) {
        article.pictureUrl = result;
        this.articleService.update(article);
      }
    });
  }

}
