import { Component, OnInit, Input } from '@angular/core';
import { Ciclista } from '../ciclista';  //Classe que empra

@Component({
  selector: 'app-ciclista-detall',
  templateUrl: './ciclista-detall.component.html',
  styleUrls: ['./ciclista-detall.component.css']
})
export class CiclistaDetallComponent implements OnInit {

  //Declaro l'objecte que empra la Plantilla, que ha de ser de tipus Input
  @Input() ciclista: Ciclista;

  constructor() { }

  ngOnInit() {
  }

}