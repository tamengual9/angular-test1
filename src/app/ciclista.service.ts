import { Injectable } from '@angular/core';

  //Import the Hero and HEROES.
  import { Ciclista } from './ciclista';
  import { CICLISTES } from './array_ciclistes';

  //Observable
  import { Observable, of } from 'rxjs';

  //Messages
  import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class CiclistaService {

  // constructor() { }
  constructor(private serveiDeMissatges: MessageService) {  }
  //emprarem el servei de missatges en aquest servei   

  //xtoni  Cream un servei SUPER-Senzill que només agafa un array i el torna, ja està!
  // getCiclistes(): Ciclista[] {
  //   return CICLISTES;
  // }


  //xtoni  Introduim els Observables
  getCiclistes(): Observable<Ciclista[]> {

    var d = new Date();
    // xtoni TODO: send the message _after_ fetching the heroes
    this.serveiDeMissatges.add('CiclistaService: acaba de recuperar 1 Ciclista'+d);

    return of(CICLISTES);
  }

  //Codi creat per jo - pq mostri missatge en clicar en un ciclista
  selectedACyclist():void {
    this.serveiDeMissatges.add('Acabes de clicar sobre un ciclista');
  }


  getCiclistaById(id: number): Observable<Ciclista> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);  //xtoni   pdt  posar els missatges al bottom!!!
    return of(CICLISTES.find(ciclista => ciclista.id === id));
  }
}
