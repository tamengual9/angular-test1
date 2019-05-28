import { Component, OnInit, Input } from '@angular/core';
import { Ciclista } from '../ciclista';  //Classe que empra

import { CiclistaService } from '../ciclista.service';  // <-- NOU: Serveis  


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-ciclista-detall',
  templateUrl: './ciclista-detall.component.html',
  styleUrls: ['./ciclista-detall.component.css']
})
export class CiclistaDetallComponent implements OnInit {

  //Declaro l'objecte que empra la Plantilla, que ha de ser de tipus Input
  @Input() ciclista: Ciclista;

  constructor(private route: ActivatedRoute,
    private ciclistaServei: CiclistaService,
    private location: Location)             {}


  //METHODS
  getCiclista(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ciclistaServei.getCiclistaById(id)
      .subscribe(ciclista => this.ciclista = ciclista);
  }


  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getCiclista();
  }

}