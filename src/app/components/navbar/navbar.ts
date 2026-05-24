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
    const elems = document.querySelectorAll('.sidenav');

    M.Sidenav.init(elems, {
      edge: 'left',
      draggable: true
    });
  }

  // === AGREGA ESTA FUNCIÓN AQUÍ ABAJO ===
  cerrarMenu() {
    const elementoMenu = document.getElementById('mobile-nav');
    // Usamos el objeto 'M' que ya tienes importado arriba
    const instanciaSidenav = M.Sidenav.getInstance(elementoMenu as Element);

    if (instanciaSidenav) {
      instanciaSidenav.close();
    }
  }
}