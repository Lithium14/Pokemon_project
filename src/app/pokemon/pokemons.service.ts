import { POKEMONS } from './../shared/mock-pokemons';
import { Pokemon } from './../shared/pokemon';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }
  // Retourne tous les pokémons
  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Pokemon {
    const pokemons = this.getPokemons();

    for (let index = 0; index < pokemons.length; index++) {
      if (id === pokemons[index].id) {
        return pokemons[index];
      }
    }
  }
}
