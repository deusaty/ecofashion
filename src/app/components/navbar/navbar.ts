import { Component, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Buscamos todos los elementos con la clase .sidenav
    const elems = document.querySelectorAll('.sidenav');
    
    // Los inicializamos con la librería de Materialize
    M.Sidenav.init(elems, {
      edge: 'left',      // Sale de la izquierda
      draggable: true    // Permite arrastrarlo con el dedo en celular
    });
  }
}