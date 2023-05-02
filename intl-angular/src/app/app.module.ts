import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DevExtremeModule } from 'devextreme-angular';

// Load localized messages (English included by default)
import 'devextreme-dist/js/localization/dx.messages.de';
import 'devextreme-dist/js/localization/dx.messages.ja';
import 'devextreme-dist/js/localization/dx.messages.ru';

// Set locale according the browser language
import { locale } from 'devextreme/localization';
locale(navigator.language);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DevExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
