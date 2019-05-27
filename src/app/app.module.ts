import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CiclistesComponent } from './ciclistes/ciclistes.component';

//xtoni  per a que funcioni  [(ngModel)]
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    CiclistesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule   //<-- xtoni  per a q funcioni  [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
