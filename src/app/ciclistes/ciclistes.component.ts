import { Component, OnInit } from '@angular/core';

//xtoni
import { Ciclista } from '../ciclista';

//xtoni  Importa l'array de ciclistes 
import { CICLISTES } from '../array_ciclistes';

@Component({
  selector: 'app-ciclistes',
  templateUrl: './ciclistes.component.html',
  styleUrls: ['./ciclistes.component.css']
})
export class CiclistesComponent implements OnInit {

  //xtoni Seguint amb l'array que he importat
  lcs = CICLISTES;

  //xtoni
  // ciclista = "Primoz Roglic";

  cicl: Ciclista = {
    id: 1,
    nom: 'Primoz',
    llinatge: 'Rogliz'
  };

    //declaracio objecte de classe
    fitxa = Ciclista;

 //xtoni  Event Handler en clicar sobre un ciclista de la llista !!



  onSelect(c : Ciclista): void {
    //Assigno el ciclista a la variable per a poder-la mostrar en el .html
    this.fitxa = c;
  }

  constructor() { }





  ngOnInit() {
  }


 


}
