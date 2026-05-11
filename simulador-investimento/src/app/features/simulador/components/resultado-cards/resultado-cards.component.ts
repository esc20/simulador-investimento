import { Component, input, computed } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ResultadoSimulacao } from '../../../../core/models/simulacao.model';

@Component({
  selector: 'app-resultado-cards',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './resultado-cards.component.html',
  styleUrl: './resultado-cards.component.scss'
})
export class ResultadoCardsComponent {
  // Recebe o array completo de resultados do pai
  resultados = input<ResultadoSimulacao[]>([]);

  // Computed para pegar sempre o último mês da simulação (o resultado final)
  dadosFinais = computed(() => {
    const res = this.resultados();
    return res.length > 0 ? res[res.length - 1] : null;
  });
}
