import { PokemonModule } from './pokemon/pokemon-module/pokemon.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesNotFoundComponent } from './pokemon/pages-not-found/pages-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    PagesNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    PokemonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
