import {Component, OnInit} from '@angular/core';
import {ShoppingArticleService} from '../../firebase-shopping-list/services/article.service';
import {MatDialog} from '@angular/material';
import {Article} from '../../firebase-shopping-list/models/article.model';
import {DeleteArticleDialogComponent} from './delete.article.dialog';
import {AddPictureArticleDialogComponent} from './add-picture-article.dialog';
import {AngularFireStorage} from 'angularfire2/storage';
import {UpdateArticleDialogComponent} from './update-article.dialog';
import {OpenPictureArticleDialogComponent} from './open-picture-article.dialog';

@Component({
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.scss'],
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
    this.dialog.open(DeleteArticleDialogComponent, {
      data: {article: article}
    });
  }

  onUpdate(article: Article) {
    this.dialog.open(UpdateArticleDialogComponent, {
      data: {article: article}
    });
  }

  onOpenPicture(article: Article) {
    this.dialog.open(OpenPictureArticleDialogComponent, {
      data: {article: article}
    });
  }

  addPicture(article: Article) {
    this.dialog.open(AddPictureArticleDialogComponent, {
      data: {article: article}
    });
  }

}
