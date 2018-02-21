import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  DxButtonModule,
  DxCheckBoxModule,
  DxChartModule,
  DxSwitchModule,
  DxPopupModule,
  DxLoadIndicatorModule,
  DxContextMenuModule,
  DxTemplateModule
} from 'devextreme-angular';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    DxButtonModule,
    DxCheckBoxModule,
    DxChartModule,
    DxSwitchModule,
    DxPopupModule,
    DxLoadIndicatorModule,
    DxContextMenuModule,
    DxTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
