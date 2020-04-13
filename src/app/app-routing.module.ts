import { PagesNotFoundComponent } from './pokemon/pages-not-found/pages-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// On déclare les routes de notre application
const routes: Routes = [
  {path: '', redirectTo: 'pokemons/all', pathMatch: 'full'},
  {path: '**', component: PagesNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
