import { EditPokemonComponent } from './../edit/edit-pokemon/edit-pokemon.component';
import { PokemonFormComponent } from './../Formulaire/pokemon-form/pokemon-form.component';

import { PokemonsService } from '../services/pokemons.service';
import { PokemonRoutingModule } from './../pokemon-routing/pokemon-routing.module';
import { PokemonTypeColorPipe } from './../pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './../directives/border-card.directive';
import { DetailPokemonComponent } from '../pages/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from '../pages/list-pokemon/list-pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    PokemonFormComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule,
  ],
  providers: [PokemonsService]
})

export class PokemonModule { }
