import { Injectable, signal, computed } from '@angular/core';
import { Textile } from '../models/textile.model';

@Injectable({ providedIn: 'root' })
export class TextileService {
  // Datos basados en tu matriz de coherencia 
  textiles = signal<Textile[]>([
    { name: 'Algodón Convencional', waterFactor: 10000, co2Factor: 25 },
    { name: 'Poliéster', waterFactor: 300, co2Factor: 14.2 },
    { name: 'Cáñamo', waterFactor: 2700, co2Factor: 3.1 },
    { name: 'Lino', waterFactor: 2500, co2Factor: 4.5 }
  ]);

  // Signals para capturar la interacción del usuario
  selectedTextileA = signal<Textile | null>(null);
  selectedTextileB = signal<Textile | null>(null);
  mass = signal<number>(0);

  // Fórmulas automáticas: Impacto = Masa * Factor [cite: 7]
  waterImpactA = computed(() => (this.selectedTextileA()?.waterFactor || 0) * this.mass());
  waterImpactB = computed(() => (this.selectedTextileB()?.waterFactor || 0) * this.mass());
  
  co2ImpactA = computed(() => (this.selectedTextileA()?.co2Factor || 0) * this.mass());
  co2ImpactB = computed(() => (this.selectedTextileB()?.co2Factor || 0) * this.mass());
}
