import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Villano, VillanosService } from 'src/app/servicios/villanos.service';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {

  villanos: Villano[] = [];

  constructor(private _villanosService: VillanosService,
              private _router: Router) {
    console.log("Constructor Heroes");
  }

  ngOnInit(): void {
    this.villanos = this._villanosService.getVillanos();
    console.log(this.villanos);
  }
  
  verVillano( idx: number) {
    this._router.navigate(["/villano", idx]);
  }

}
