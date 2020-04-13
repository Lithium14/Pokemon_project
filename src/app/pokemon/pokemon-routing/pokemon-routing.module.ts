import { AuthService } from './../../Auth/auth.service';
import { EditPokemonComponent } from './../edit/edit-pokemon/edit-pokemon.component';
import { DetailPokemonComponent } from './../pages/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './../pages/list-pokemon/list-pokemon.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// les routes du module Pokémon
const pokemonsRoutes: Routes = [
  {
    path: 'pokemon',
    canActivate: [AuthService],
    children: [
      { path: 'all', component: ListPokemonComponent },
      { path: 'edit/:id', component: EditPokemonComponent, canActivate: [AuthService] },
      { path: ':id', component: DetailPokemonComponent }

    ]
  }
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
