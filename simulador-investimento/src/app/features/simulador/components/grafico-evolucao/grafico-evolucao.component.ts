import { Component, ElementRef, ViewChild, effect, input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ResultadoSimulacao } from '../../../../core/models/simulacao.model';

Chart.register(...registerables);

@Component({
  selector: 'app-grafico-evolucao',
  standalone: true,
  template: `<div class="chart-container"><canvas #meuGrafico></canvas></div>`,
  styles: [`.chart-container { height: 350px; width: 100%; }`]
})
export class GraficoEvolucaoComponent {
  @ViewChild('meuGrafico') canvas!: ElementRef;
  resultados = input<ResultadoSimulacao[]>([]);
  chart?: Chart;

  constructor() {
    // O efeito observa mudanças no input 'resultados'
    effect(() => {
      const dados = this.resultados();
      if (dados.length > 0 && this.canvas) {
        this.updateChart(dados);
      }
    });
  }

  private updateChart(dados: ResultadoSimulacao[]) {
    if (this.chart) this.chart.destroy();

    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'line',
      data: {
        labels: dados.map(d => `Mês ${d.mes}`),
        datasets: [{
          label: 'Patrimônio',
          data: dados.map(d => d.valorTotal),
          borderColor: '#A67C52', // Bronze para combinar com o Marfim
          backgroundColor: 'rgba(166, 124, 82, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { 
            ticks: { color: '#797670' },
            grid: { color: 'rgba(0,0,0,0.03)' } 
          }
        }
      }
    });
  }
}
