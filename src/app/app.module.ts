import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//xtoni  per a que funcioni  [(ngModel)]
import { FormsModule } from '@angular/forms';

//http
import { HttpClientModule }    from '@angular/common/http';


import { CiclistesComponent } from './ciclistes/ciclistes.component';
import { CiclistaDetallComponent } from './ciclista-detall/ciclista-detall.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    CiclistesComponent,
    CiclistaDetallComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,       //<-- xtoni  per a q funcioni  [(ngModel)]
    HttpClientModule,
    AppRoutingModule   //Routing 
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
