import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mainheader } from './components/mainheader/mainheader';
import { NavbarComponent } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Infografia } from './components/infografia/infografia';
import { ComparatorComponent } from './components/comparator/comparator';

declare var M: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Mainheader, NavbarComponent, Footer, Infografia, ComparatorComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {
  protected readonly title = signal('GreenFashion');

  ngAfterViewInit(): void {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, {});
  }
}
