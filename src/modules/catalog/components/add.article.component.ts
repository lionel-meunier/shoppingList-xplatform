import {Component} from '@angular/core';
import {ShoppingArticleService} from '../../firebase-shopping-list/services/article.service';
import {MatSnackBar} from '@angular/material';
import {Article} from '../../firebase-shopping-list/models/article.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: 'add.article.component.html'
})
export class AddArticleComponent {

  newArticle: Article = new Article();

  constructor(private articleService: ShoppingArticleService, public snackBar: MatSnackBar) {
  }

  public onCreate(formCreate: NgForm): void {
    if (formCreate.valid === true) {
      this.articleService.add(this.newArticle).then(() => {
        this.newArticle = new Article();
      }, reason => {
        this.snackBar.open(reason, null, {
          duration: 2000,
        });
      });
    }
  }
}
