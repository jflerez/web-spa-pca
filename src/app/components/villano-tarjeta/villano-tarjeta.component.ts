import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villano-tarjeta',
  templateUrl: './villano-tarjeta.component.html',
  styleUrls: ['./villano-tarjeta.component.css']
})
export class VillanoTarjetaComponent implements OnInit {

  @Input() villano: any = {};
  @Input() index: number;

  @Output() villanoSeleccionado: EventEmitter<number>;

  constructor(private _router:Router) {
    this.villanoSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {

  }
  
  verVillano() {
    // console.log(this.index);  
    this._router.navigate(['/villano', this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }

}
