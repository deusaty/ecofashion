import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mainheader } from './components/mainheader/mainheader'; 
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Infografia } from './components/infografia/infografia';  
import { ComparatorComponent } from './components/comparator/comparator';           

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mainheader, Navbar, Footer, Infografia, ComparatorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GreenFashion');
}
