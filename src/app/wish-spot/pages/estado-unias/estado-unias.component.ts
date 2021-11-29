import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-unias',
  templateUrl: './estado-unias.component.html',
  styleUrls: ['./estado-unias.component.scss']
})
export class EstadoUniasComponent implements OnInit {

  mostrarSeccion1: boolean;
  mostrarSeccion2: boolean;

  condition: boolean = true;

  constructor() {
    this.mostrarSeccion1 = true;
    this.mostrarSeccion2 = false;
    
   }

  ngOnInit(): void { }

  funcion() {       
    this.mostrarSeccion1 = false;
    this.mostrarSeccion2 = true;
  }

}
