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
}