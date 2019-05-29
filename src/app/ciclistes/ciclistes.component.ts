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
export class CiclistesComponent implements OnInit 
{
  // (test) Property
  cicl: Ciclista = {  id: 1, nom: 'Primoz', llinatge: 'Rogliz', equip: 'Rogliz' };


  //xtoni  Modificat per afegir el constructor  (XTONI -> Traplantant al component DASHBOARD ! )
  constructor(private ciclistaServei: CiclistaService) { }



  ngOnInit() {
  }

}