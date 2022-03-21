import { Component, OnInit, Input } from '@angular/core';
import{ Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute, // contém inormações sobre a rota para esta instância do HeroDetailComponent
    private heroService: HeroService, //obtém dados de herói do servidor remoto e este componente os usará para obter o herói para exibição.
    private location: Location //é um serviço Angular para interagir com o navegado
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }



}
