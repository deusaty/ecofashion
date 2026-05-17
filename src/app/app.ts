import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mainheader } from './components/mainheader/mainheader'; 
import { NavbarComponent } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Infografia } from './components/infografia/infografia';  
import { ComparatorComponent } from './components/comparator/comparator';           

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Mainheader, NavbarComponent, Footer, Infografia, ComparatorComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('GreenFashion');
}
