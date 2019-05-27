import { Component, OnInit } from '@angular/core';
import { Ciclista } from '../ciclista';  //Classe que empra
//xtoni  Importa l'array de ciclistes 


//import { CICLISTES } from '../array_ciclistes';
import { CiclistaService } from '../ciclista.service';  // <-- NOU: Serveis  

@Component({
  selector: 'app-ciclistes',  //xtoni  aixo empro per a poder emprar-ho en alguna plantilla
  templateUrl: './ciclistes.component.html',
  styleUrls: ['./ciclistes.component.css']
})
export class CiclistesComponent implements OnInit {

  //xtoni Seguint amb l'array que he importat
  // lcs = CICLISTES; //importo l'array de ciclistes que està a   array_ciclistes.ts

  //lo anterior - que era una "chapucilla" de les primeres passes de Angular - ho substitueixo per
  lcs: Ciclista[];
  fitxa: Ciclista;  //declaracio objecte de classe

  // ciclista = "Primoz Roglic";

  cicl: Ciclista = {
    id: 1,
    nom: 'Primoz',
    llinatge: 'Rogliz'
  };


  //xtoni  Event Handler en clicar sobre un ciclista de la llista !!
  onSelect(fila: Ciclista): void {
    //Assigno el ciclista a la variable per a poder-la mostrar en el .html
    //Per fer aixo he d'emprar @input -> mirar a El meu Tutorial de Angular
    this.fitxa = fila;

    //It adds a new message to the bottom of the page
    this.ciclistaServei.selectedACyclist();
    
  }

  //xtoni  Modificat per afegir el constructor
  constructor(private ciclistaServei: CiclistaService) { }

  //xtoni  Ara afegim una funció en el Component per extreure els Ciclistes amb el Servei
  getCiclistes(): void {
    // this.lcs = this.ciclistaServei.getCiclistes();

    //ara amb observables
    this.ciclistaServei.getCiclistes()
      .subscribe(lcs => this.lcs = lcs);
  }


  ngOnInit() {
    //empro el servei
    this.getCiclistes();
  }

}