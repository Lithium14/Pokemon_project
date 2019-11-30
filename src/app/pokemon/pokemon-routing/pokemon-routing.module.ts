import { EditPokemonComponent } from './../edit/edit-pokemon/edit-pokemon.component';
import { DetailPokemonComponent } from './../pages/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './../pages/list-pokemon/list-pokemon.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



// les routes du module Pokémon
const pokemonsRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },
  {path: 'pokemon/edit/:id', component: EditPokemonComponent},
  { path: 'pokemon/:id', component: DetailPokemonComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(pokemonsRoutes)
    ],
  exports: [
    RouterModule
  ]
})
export class PokemonRoutingModule { }
