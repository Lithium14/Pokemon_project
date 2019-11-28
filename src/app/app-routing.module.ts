import { PagesNotFoundComponent } from './pokemon/pages-not-found/pages-not-found.component';
import { DetailPokemonComponent } from './pokemon/pages/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './pokemon/pages/list-pokemon/list-pokemon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// On déclare les routes de notre application
const routes: Routes = [
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {path: '**', component: PagesNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
