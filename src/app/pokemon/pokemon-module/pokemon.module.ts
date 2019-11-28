import { PokemonRoutingModule } from './../pokemon-routing/pokemon-routing.module';
import { PokemonTypeColorPipe } from './../pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './../directives/border-card.directive';
import { DetailPokemonComponent } from '../pages/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from '../pages/list-pokemon/list-pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ],
  providers: []
})

export class PokemonModule { }
