import { PokemonsService } from './../../services/pokemons.service';
import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from './../../../shared/pokemon';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor( private route: ActivatedRoute,
               private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.pokemon = this.pokemonsService.getPokemon(id);
  }

}
