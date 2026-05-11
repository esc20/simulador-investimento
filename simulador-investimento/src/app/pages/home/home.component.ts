import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports dos componentes que você criou
import { FormularioComponent } from '../../features/simulador/components/formulario/formulario.component';
import { ResultadoCardsComponent } from '../../features/simulador/components/resultado-cards/resultado-cards.component';
import { GraficoEvolucaoComponent } from '../../features/simulador/components/grafico-evolucao/grafico-evolucao.component';

// Import do Model
import { ResultadoSimulacao } from '../../core/models/simulacao.model';

@Component({
  selector: 'app-home',
  standalone: true,
  // Não esqueça de adicionar os componentes aqui no imports
  imports: [
    CommonModule, 
    FormularioComponent, 
    ResultadoCardsComponent,
    GraficoEvolucaoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Signal que armazena a lista de meses calculada
  resultadosSimulacao = signal<ResultadoSimulacao[]>([]);

  // Esta função é chamada toda vez que o formulário emite um novo cálculo
  atualizarResultados(novosResultados: ResultadoSimulacao[]) {
    this.resultadosSimulacao.set(novosResultados);
  }
}
