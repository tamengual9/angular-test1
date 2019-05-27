import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//xtoni  per a que funcioni  [(ngModel)]
import { FormsModule } from '@angular/forms';

import { CiclistesComponent } from './ciclistes/ciclistes.component';
import { CiclistaDetallComponent } from './ciclista-detall/ciclista-detall.component';
import { MessagesComponent } from './messages/messages.component'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    CiclistesComponent,
    CiclistaDetallComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule   //<-- xtoni  per a q funcioni  [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
