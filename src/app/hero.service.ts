import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({  providedIn: 'root',})
export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    ) { }

    private heroesUrl = 'api/heroes' //conferir

    private log(message: string) { //conferir
    this.messageService.add('HeroService: ${message}');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log('${operaion} failed: ${error.message}');
      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
   return this.http.get<Hero[]>(this.heroesUrl)
   .pipe(
     tap(_ => this.log('fetched heroes')),
     catchError(this.handleError<Hero[]>('getHeroes', []))
   );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
}
