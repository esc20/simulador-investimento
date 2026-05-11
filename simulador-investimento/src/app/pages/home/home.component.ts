import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes da Feature
import { FormularioComponent } from '../../features/simulador/components/formulario/formulario.component';
import { ResultadoCardsComponent } from '../../features/simulador/components/resultado-cards/resultado-cards.component';
import { GraficoEvolucaoComponent } from '../../features/simulador/components/grafico-evolucao/grafico-evolucao.component';
import { TabelaEvolucaoComponent } from '../../features/simulador/components/tabela-evolucao/tabela-evolucao.component';

// Services e Models
import { ResultadoSimulacao } from '../../core/models/simulacao.model';
import { InsightsComponent } from '../../features/simulador/components/insights/insights.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormularioComponent,
    ResultadoCardsComponent,
    GraficoEvolucaoComponent,
    TabelaEvolucaoComponent,
    InsightsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Injeção do serviço de exportação

  // Signal que centraliza o estado dos resultados na página
  resultadosSimulacao = signal<ResultadoSimulacao[]>([]);

  // Função chamada pelo output (aoSimular) do formulário
  atualizarResultados(novosResultados: ResultadoSimulacao[]) {
    this.resultadosSimulacao.set(novosResultados);
  }

  // Função para disparar a geração do PDF
  
}
