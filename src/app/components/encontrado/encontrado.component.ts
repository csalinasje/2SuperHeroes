import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-encontrado',
  templateUrl: './encontrado.component.html',
})
export class EncontradoComponent implements OnInit {
  heroes: any [] = [];
  constructor( private activateRoute: ActivatedRoute,
               private heroesService: HeroesService ) {
   }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.heroes = this.heroesService.buscarHeroes(params.termino);
      console.log(this.heroes);
    });
  }

}
