  import { Injectable } from '@angular/core';
  //Import the Hero and HEROES.
  import { Ciclista } from './ciclista';
/*   import { CICLISTES } from './array_ciclistes';
 */  
//Observable
  import { Observable, of } from 'rxjs';
  //Messages
  import { MessageService } from './message.service';
  //HTTP
  import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CiclistaService {

  // constructor() { }
  constructor(private http: HttpClient,
              private serveiDeMissatges: MessageService) {  }
  //emprarem el servei de missatges en aquest servei   

  //xtoni  Cream un servei SUPER-Senzill que només agafa un array i el torna, ja està!
  // getCiclistes(): Ciclista[] {
  //   return CICLISTES;
  // }


  /* PROPERTIES */
  private ciclistesUrl = 'api/ciclistes';  // URL a la web api q hem creat a l'apartat HTTP

  /***********/
  /* METODES */
  /***********/

                  //xtoni  Introduim els Observables
  getCiclistes(): Observable<Ciclista[]> {
    // xtoni TODO: send the message _after_ fetching the heroes
    this.serveiDeMissatges.add('CiclistaService: acaba de recuperar 1 Ciclista');

 //   return of(CICLISTES);
    return this.http.get<Ciclista[]>(this.ciclistesUrl)
  }


  //Codi creat per jo - pq mostri missatge en clicar en un ciclista
  selectedACyclist():void {
    this.serveiDeMissatges.add('Acabes de clicar sobre un ciclista');
  }


  getCiclistaById(id: number): Observable<Ciclista> {
    // TODO: send the message _after_ fetching the hero
    this.serveiDeMissatges.add(`No puc tornar el ciclista id=${id} pq me falta acabar el tutorial HTTP de Angular`);
    return of(CICLISTES.find(ciclista => ciclista.id === id));
  }

//XTONI  introduit en l'apartat HTTP -> per a passar un missatge al log i aixi 
//fer un seguiment del funcionament de l'app

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.serveiDeMissatges.add(`HeroService: ${message}`);
}
}
