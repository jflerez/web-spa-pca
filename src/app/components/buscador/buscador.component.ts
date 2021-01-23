import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VillanosService } from 'src/app/servicios/villanos.service';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  villanos: any[] = []
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _villanosService: VillanosService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
      this.villanos = [];
      if (this.heroes.length === 0) {
        this.villanos = this._villanosService.buscarVillanos(params['termino']);
      }
    });

  }
}
