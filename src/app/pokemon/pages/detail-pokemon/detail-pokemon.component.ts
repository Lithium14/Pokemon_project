import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../../shared/pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  // Déclare 2 propriété

  pokemon: Pokemon = null; // contient le pokemon à afficher


  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) { }

  // Cette méthode n'a pas de valeur de retour et ne renvoie rien
  ngOnInit(): void {

     // permet de récup les paramètres de la route associé à notre composant
     // propriété snapshot permet de récup le paramètte de manière synchrone
     // ( on bloque l'execution du programme tant qu'on a pas récup l'identifiant afficher)
    // + permet de casser la valeur à droite en un nombre
    // this.route permet d'acceder au paramètre passer dans le constructor
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonsService.getPokemon(id);
  }
  // il revient à la page pokemons dès qu'il a terminé de consulter le détail
      goBack(): void {
          this.router.navigate(['/pokemons']);
      }

      goEdit(pokemon: Pokemon): void {
        const link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
      }
}




