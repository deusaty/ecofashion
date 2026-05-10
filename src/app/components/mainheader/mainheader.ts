import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mainheader',
  standalone: true, // Asegúrate de tener esto si usas el arreglo de imports
  imports: [],
  templateUrl: './mainheader.html',
  styleUrl: './mainheader.css',
})
export class Mainheader implements AfterViewInit {

  // Usamos el nombre que definiste en el HTML (#videoElement)
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    // Accedemos a través de videoElement, que es la referencia real
    const video = this.videoElement.nativeElement;
    
    // Configuramos el video y lo reproducimos
    video.muted = true;
    video.play().catch((error) => {
      console.error("El video no pudo arrancar automáticamente:", error);
    });
  }
}

