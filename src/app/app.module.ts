import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//xtoni  per a que funcioni  [(ngModel)]
import { FormsModule } from '@angular/forms';

//http
import { HttpClientModule } from '@angular/common/http';
//in-memory WEB API -> for HTTP requests
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

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
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,       //<-- xtoni  per a q funcioni  [(ngModel)]
    AppRoutingModule,   //Routing 

    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }