import { PokemonsService } from '../../services/pokemons.service';
import { Router } from '@angular/router';
import { Pokemon } from '../../../shared/pokemon';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  public pokemons: Pokemon[] = null;

  constructor(private router: Router, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonsService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez cliqué sur ' + pokemon.name);
    // On utilise le router pour rediriger le user vers la page détail d'un pokemon
    // déclare une variable qui va contenir l'URL vers laquelle nous devrons rediriger le user
    // on lui attribue un tableau => URL de direction et on lui ajoute comme paramètre l'id du pokemon sur lequel le user vient de cliquer

    const link = ['/pokemon', pokemon.id];
    // on appelle le router et on lui applique la méthode navigate en lui passant l'URL vers laquel rediriger le user
    this.router.navigate(link);
  }

}
