import {App} from './app.component'
import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {DxDataGridModule} from 'devextreme-angular/ui/data-grid'

import './localization'

@NgModule({
  imports: [ BrowserModule, DxDataGridModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}