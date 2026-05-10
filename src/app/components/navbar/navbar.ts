import { Component, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {

  ngAfterViewInit(): void {
  
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, {
      edge: 'left',
      draggable: true
    });
  }

}
