import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  marvel: boolean;
  heroe: any = {};
  casa: string;
constructor( private activatedRoute: ActivatedRoute,
             private heroesService: HeroesService,
             private router: Router) {
this.activatedRoute.params.subscribe( params => {
  console.log(params);
  this.heroe = this.heroesService.getHeroe( params.id);
  console.log('Es' + this.heroe);
  this.casa = this.heroe.casa;
});
if (this.casa === 'Marvel') {
  console.log('Es' + this.casa);
  this.marvel = true;
 } else {
   this.marvel = false;
 }
}
volver() {
  this.router.navigate(['/heroes']);
}
}
