import {App} from './app.component'
import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.light.css'
import {DxDataGridModule} from 'devextreme-angular/ui/data-grid'

@NgModule({
  imports: [ BrowserModule, DxDataGridModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}