import { Component, OnInit } from '@angular/core';
import { Ciclista } from '../ciclista';
import { CiclistaService } from '../ciclista.service';  // <-- NOU: Serveis  


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit 
{
  //Properties
  lcs: Ciclista[] =  [];  //Array de Ciclistes
  fitxa: Ciclista;        //Fitxa de ciclista a mostrar sota la llista de fitxes de ciclistes


  //El constructor reb la classe del Servei que se crea per defecte
  constructor(private ciclistaServei: CiclistaService) { }

  ngOnInit() {
    //Mostra la vista
    this.getCiclistes();
  }

   /***********/
   /* METHODS */
   /***********/

   //Mètode per visualitzar l'array de ciclistes emprant el Servei
   getCiclistes(): void {
    // this.lcs = this.ciclistaServei.getCiclistes();

    //ara amb observables
    this.ciclistaServei.getCiclistes()
      .subscribe(lcs => this.lcs = lcs);
  }
  



    //Event Handler:  Clic sobre 1 ciclista del Dashboard
    onSelect(fila: Ciclista): void {
      //Assigno el ciclista a la variable per a poder-la mostrar en el .html
      //Per fer aixo he d'emprar @input -> mirar a El meu Tutorial de Angular
      this.fitxa = fila;
  
      //It adds a new message to the bottom of the page
      this.ciclistaServei.selectedACyclist();
    }

}
