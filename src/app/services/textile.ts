import { Injectable, signal, computed } from '@angular/core';
import { Textile } from '../models/textile.model';

@Injectable({ providedIn: 'root' })
export class TextileService {
  // Base de datos extendida
  textiles = signal<Textile[]>([
    { name: 'Algodón Convencional', waterFactor: 10000, co2Factor: 25 },
    { name: 'Algodón Orgánico', waterFactor: 2500, co2Factor: 18 },
    { name: 'Poliéster Virgen', waterFactor: 300, co2Factor: 14.2 },
    { name: 'Poliéster Reciclado', waterFactor: 100, co2Factor: 4 },
    { name: 'Cáñamo', waterFactor: 2700, co2Factor: 3.1 },
    { name: 'Lino', waterFactor: 2500, co2Factor: 4.5 },
    { name: 'Bambú (Viscosa)', waterFactor: 4000, co2Factor: 10 },
    { name: 'Lana', waterFactor: 1500, co2Factor: 30 },
    { name: 'Seda', waterFactor: 4000, co2Factor: 40 },
    { name: 'Nylon', waterFactor: 700, co2Factor: 16 }
  ]);

  selectedA = signal<Textile | null>(null);
  selectedB = signal<Textile | null>(null);
  mass = signal<number>(0);

  waterA = computed(() => (this.selectedA()?.waterFactor || 0) * this.mass());
  waterB = computed(() => (this.selectedB()?.waterFactor || 0) * this.mass());
  co2A = computed(() => (this.selectedA()?.co2Factor || 0) * this.mass());
  co2B = computed(() => (this.selectedB()?.co2Factor || 0) * this.mass());
}
