import { Injectable } from '@angular/core';
import { InMemoryDbService  } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  createDb(){
    const heroes = [
      {id: 11, name: 'Weomua'},
      {id: 12, name: 'Fuidur'},
      {id: 13, name: 'Mauhrak'},
      {id: 14, name: 'Oglrelump'},
      {id: 15, name: 'Gamudin'},
      {id: 16, name: 'Gimror'},
      {id: 17, name: 'Garoak'},
      {id: 18, name: 'Kiadan'},
      {id: 19, name: 'Lomilas'},
      {id: 20, name: 'Sotilas'}
    ];
    return {heroes};
  }

  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(heroes => heroes.id)) + 1 : 11;
  }
  constructor() { }
}
