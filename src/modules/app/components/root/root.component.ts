import {Component, OnDestroy, OnInit} from '@angular/core';
import {UpdateService} from '../../services/update.service';
import {BlurService} from '../../services/blur.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss'],
})
export class RootComponent implements OnInit, OnDestroy {
  private _blurChangeSubscription: Subscription;

  public isBlurActive = false;

  constructor(private _updateService: UpdateService, private _blurService: BlurService) {
  }

  public ngOnInit(): void {
    this._updateService.register();
    this._blurService.onBlurChange.subscribe(blur => this.isBlurActive = blur);
  }

  public ngOnDestroy(): void {
    this._updateService.unregister();
    if (this._blurChangeSubscription) {
      this._blurChangeSubscription.unsubscribe();
    }
  }
}
