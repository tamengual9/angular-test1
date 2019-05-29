import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id:21, nom:'Miguel',llinatge:'Indurain',equip:'Banesto'},
      { id:22, nom:'Pedro',llinatge:'Delgado',equip:'Manzana Postobon'},
      { id:23, nom:'Lance',llinatge:'Armstrong',equip:'US POSTAL'} 
      { id:24, nom:'Melcior',llinatge:'Mauri',equip:'ONCE'} 
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}