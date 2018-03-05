import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  DevExtremeModule
} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { GridsComponent } from './grids/grids.component';
import { VizComponent } from './viz/viz.component';
import { EditorsComponent } from './editors/editors.component';
import { ActionsAndListsComponent } from './actions-and-lists/actions-and-lists.component';
import { DialogsAndNotificationsComponent } from './dialogs-and-notifications/dialogs-and-notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    GridsComponent,
    VizComponent,
    EditorsComponent,
    ActionsAndListsComponent,
    DialogsAndNotificationsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    DevExtremeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
