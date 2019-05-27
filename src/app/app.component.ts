import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  //xtoni  ESTO QUE ES?
  templateUrl: './app.component.html',  //OK
  styleUrls: ['./app.component.css']    //OK
})

//xtoni  Change the title of the heading of the main page
export class AppComponent {
  title = 'FITXES DE CICLISTES';
}
