import { POKEMONS } from '../../../shared/mock-pokemons';
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
  pokemons: Pokemon[] = null; // contient la liste de tout les pokemons de notre appli et nous permettra de rechercher l'identifiant
  pokemon: Pokemon = null; // contient le pokemon à afficher


  constructor(private route: ActivatedRoute, private router: Router) { }

  // Cette méthode n'a pas de valeur de retour et ne renvoie rien
  ngOnInit(): void {
    this.pokemons = POKEMONS; // récup tout les pokemons de notre appli et nous les affectons à la propriété pokemons

     // permet de récup les paramètres de la route associé à notre composant
     // propriété snapshot permet de récup le paramètte de manière synchrone( on bloque l'execution du programme tant qu'on a pas récup l'identifiant afficher)
    // + permet de casser la valeur à droite en un nombre
    // this.route permet d'acceder au paramètre passer dans le constructor

    const id = +this.route.snapshot.paramMap.get('id');
    // on ajoute une boucle pour itérer sur tout les pokemons de l'appli pour trouver celui qui doti être afficher
    // on cherche donc le pokemon qui a un id qui correspond à l'id de la route qu'on a extrait à la ligne 29
		  for (let i = 0; i < this.pokemons.length; i++) {
			if (this.pokemons[i].id === id) {
        // Si on le trouve , on l'affecte au composant ligne 35
				this.pokemon = this.pokemons[i];
			}
		}
	}

  // il revient à la page pokemons dès qu'il a terminé de consulter le détail
	goBack(): void {
		this.router.navigate(['/pokemons']);

  }

}
