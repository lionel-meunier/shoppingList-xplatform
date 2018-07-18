import {ModuleWithProviders, NgModule} from '@angular/core';
import {SHARED_SERVICES} from './services';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {_window, WINDOW} from './services/window.token';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatMenuModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    MatCheckboxModule,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    MatCheckboxModule,
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...SHARED_SERVICES,
        {provide: WINDOW, useFactory: _window}
      ],
    };
  }
}
