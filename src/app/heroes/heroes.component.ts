import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';
//import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html', //o local do arquivo de modelo do componente.
  styleUrls: ['./heroes.component.css'] //a localização dos estilos CSS privados do componente.
})

export class HeroesComponent implements OnInit {
  //injetando  HeroService parâmetro privado;
  constructor(private heroService: HeroService) { }

  //inicializa
  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];
  selectedHero: Hero | undefined;

  //metodo para recuperar os herois, emulando a chama com a lista do mock com o bservável
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        // AQUI DENTRO FAZ DEPOIS QUE A CHAMADA ACABA
        this.heroes = heroes;
      });
  }

  /* original
  getHeroes(); void {
    this.heroes = this.heroService.getHeroes();
  }
  */

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


