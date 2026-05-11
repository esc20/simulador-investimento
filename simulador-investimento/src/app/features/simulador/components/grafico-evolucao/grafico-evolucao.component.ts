import { Component, ElementRef, ViewChild, effect, input, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ResultadoSimulacao } from '../../../../core/models/simulacao.model';

Chart.register(...registerables);

@Component({
  selector: 'app-grafico-evolucao',
  standalone: true,
  templateUrl: './grafico-evolucao.component.html',
  styleUrl: './grafico-evolucao.component.scss'
})
export class GraficoEvolucaoComponent {
  @ViewChild('meuGrafico') canvas!: ElementRef<HTMLCanvasElement>;
  resultados = input<ResultadoSimulacao[]>([]);
  chart?: Chart;

  constructor() {
    // O effect garante que, sempre que 'resultados' mudar, o gráfico tente atualizar
    effect(() => {
      const dados = this.resultados();
      // O 'setTimeout' dá um fôlego para o Angular terminar de renderizar o HTML
      setTimeout(() => {
        if (this.canvas?.nativeElement && dados.length > 0) {
          this.updateChart(dados);
        }
      }, 0);
    });
  }

  private updateChart(dados: ResultadoSimulacao[]) {
    // Destruir o gráfico anterior é essencial para evitar telas brancas ou erros de 'canvas in use'
    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = this.canvas.nativeElement.getContext('2d');
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dados.map(d => `Mês ${d.mes}`),
        datasets: [{
          label: 'Patrimônio',
          data: dados.map(d => d.valorTotal),
          borderColor: '#A67C52',
          backgroundColor: 'rgba(166, 124, 82, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Permite que o gráfico preencha o container
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: {
            beginAtZero: false,
            ticks: { color: '#797670' },
            grid: { color: 'rgba(0,0,0,0.03)' }
          }
        }
      }
    });
  }
}
