import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', //o seletor de elementos CSS do componente
  templateUrl: './heroes.component.html', //o local do arquivo de modelo do componente.
  styleUrls: ['./heroes.component.css'] //a localização dos estilos CSS privados do componente.
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero?: Hero;

  constructor() {}
  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }





}


