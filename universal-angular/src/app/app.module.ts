import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  DevExtremeModule,
  DxServerTransferStateModule
} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { GridsComponent } from './grids/grids.component';
import { VizComponent } from './viz/viz.component';
import { EditorsComponent } from './editors/editors.component';
import { SchedulersComponent } from './schedulers/schedulers.component';
import { ActionsAndListsComponent } from './actions-and-lists/actions-and-lists.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsAndMultiPurposeComponent } from './forms-and-multi-purpose/forms-and-multi-purpose.component';


@NgModule({
  declarations: [
    AppComponent,
    GridsComponent,
    VizComponent,
    EditorsComponent,
    SchedulersComponent,
    ActionsAndListsComponent,
    NavigationComponent,
    FormsAndMultiPurposeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    DevExtremeModule,
    DxServerTransferStateModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
