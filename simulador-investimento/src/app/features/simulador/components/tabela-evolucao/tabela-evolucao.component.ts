import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadoSimulacao } from '../../../../core/models/simulacao.model';

@Component({
  selector: 'app-tabela-evolucao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-evolucao.component.html',
  styleUrl: './tabela-evolucao.component.scss'
})
export class TabelaEvolucaoComponent {
  resultados = input<ResultadoSimulacao[]>([]);
}
