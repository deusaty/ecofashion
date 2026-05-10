import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextileService } from '../../services/textile';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-comparator',
  standalone: true,
  imports: [CommonModule, FormsModule, BaseChartDirective],
  templateUrl: './comparator.html',
  styleUrl: './comparator.css'
})
export class ComparatorComponent {
  public textileService = inject(TextileService);

  public chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: { y: { beginAtZero: true } }
  };

  public get chartData(): ChartConfiguration<'bar'>['data'] {
    return {
      labels: ['Agua (L)', 'CO2 (kg)'],
      datasets: [
        { 
          data: [this.textileService.waterA(), this.textileService.co2A()], 
          label: this.textileService.selectedA()?.name || 'Material A' 
        },
        { 
          data: [this.textileService.waterB(), this.textileService.co2B()], 
          label: this.textileService.selectedB()?.name || 'Material B' 
        }
      ]
    };
  }
}