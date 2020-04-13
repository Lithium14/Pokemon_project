import { LoaderComponent } from './../../loader/loader.component';
import { SearchPokemonComponent } from './../search/search-pokemon/search-pokemon.component';
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
import { AuthService } from './../../Auth/auth.service';









@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    SearchPokemonComponent,
    PokemonFormComponent,
    LoaderComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule,
  ],
  providers: [PokemonsService, AuthService]
})

export class PokemonModule { }
