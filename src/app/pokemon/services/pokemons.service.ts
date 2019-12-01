import { Pokemon } from '../../shared/pokemon';
import { Injectable, TemplateRef } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {


  constructor(private http: HttpClient) { }

  private pokemonsUrl = 'api/pokemons';
  // permet de centraliser la gestion des logs dans le service
  private log(log: string) {
    console.info(log);
  }
  private handleError<T>(operation= 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`$(operation) failed: $(error.message)`);
      return of(result as T);
    };
  }

  searchPokemons(term: string): Observable<Pokemon[] > {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
      tap(() => this.log(`found pokemons matching "${term}"`)),
      catchError(this.handleError<Pokemon[]>('searchPokemons', []))
    );
  }
  deletePokemon(pokemon: Pokemon): Observable < Pokemon > {
    const url = `${this.pokemonsUrl}/${pokemon.id}` ;
    const httpOptions = {
      headers: new HttpHeaders ({'Content-Type': 'application/json'})
    };
    return this.http.delete<Pokemon>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Pokemon id=${pokemon.id}`)),
      catchError(this.handleError<Pokemon>('deletePokemon'))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable < Pokemon > {
    const httpoptions = {
      headers: new HttpHeaders ({'Content-Type': 'application/json'})

    };
    return this.http.put(this.pokemonsUrl, pokemon, httpoptions).pipe(
      tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatedPokemon'))
    );
  }

  // Retourne tous les pokémons
  // retourne un observable qui contient un tableau de pokemon
  // http.get retourne un observable qui s'occupe d'envoyer une requete get sur la route api/pokemons
  // type également les données retour
  // tap = permet d'intéragir sur le déroulement des events générer par l'observable
  // CatchError = permet d'intercepter les erreurs eventuels
  // handleError = dédié à la gestion des erreurs
  getPokemons(): Observable < Pokemon[] > {
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_ => this.log(`fetched pokemons`)),
      catchError(this.handleError(`getPokemons`, []))
    );
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Observable < Pokemon > {
      const url = `${this.pokemonsUrl}/${id}`;

      return this.http.get<Pokemon>(url).pipe(
        tap(_ => this.log(`fetched pokemon id=${id}`)),
        catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
      );
  }
    // Ajout de la méthode qui permet de regrouper tout les types
    // Un tableau de châine de caractère
    // retourne un tableau de la liste contenant tout les pokemons
  getPokemonTypes(): string[] {
      return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol'];
    }
  }


