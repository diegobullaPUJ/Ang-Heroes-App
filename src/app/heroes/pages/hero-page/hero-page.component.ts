import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-heroes-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit {

  hero?: Hero;

  constructor( private heroesService : HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router
              ) {}


  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap( ({ id }) => this.heroesService.getHeroById( id )),

      ).subscribe( hero =>{
        this.hero = hero
        if( !hero ) return this.router.navigate(['/heroes/list']);
        return
      })
  }

  goBack(): void {
    this.router.navigate(['/heroes/list']);
  }

  goSearch():void {
    this.router.navigate(['/heroes/search']);
  }


}
