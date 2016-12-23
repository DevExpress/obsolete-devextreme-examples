import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import it to change locale and load localization messages
import { locale, loadMessages } from 'devextreme/localization'; 

import { DevExtremeModule } from 'devextreme-angular';
import 'devextreme-intl';

import { AppComponent } from './app.component';

//Load localized messages (English included by default)
let messagesDe = require("devextreme/localization/messages/de.json"),
  messagesJa = require("devextreme/localization/messages/ja.json"),
  messagesRu = require("devextreme/localization/messages/ru.json");
  
loadMessages(messagesRu);
loadMessages(messagesDe);
loadMessages(messagesJa);
  
//Set locale according the browser language
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

