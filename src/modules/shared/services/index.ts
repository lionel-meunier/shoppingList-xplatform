import {FeatureService} from './feature.service';
import {AppStateService} from './appState.service';
import {AuthService} from './auth.service';

export const SHARED_SERVICES = [
  AppStateService,
  FeatureService,
  AuthService
];
