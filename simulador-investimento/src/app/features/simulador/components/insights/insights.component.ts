import { Component, input, computed } from '@angular/core';
import { CommonModule, PercentPipe } from '@angular/common';
import { ResultadoSimulacao } from '../../../../core/models/simulacao.model';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.scss'
})
export class InsightsComponent {
  resultados = input<ResultadoSimulacao[]>([]);

  // Pega o último registro da simulação
  dadosFinais = computed(() => {
    const res = this.resultados();
    return res.length > 0 ? res[res.length - 1] : null;
  });

  // Calcula quanto dos juros representa do valor total
  porcentagemJuros = computed(() => {
    const dados = this.dadosFinais();
    if (!dados || dados.valorTotal === 0) return 0;
    return ((dados.totalJuros / dados.valorTotal) * 100).toFixed(1);
  });
}
