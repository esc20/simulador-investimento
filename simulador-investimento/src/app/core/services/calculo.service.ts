import { Injectable, signal } from '@angular/core';
import { SimulacaoInput, ResultadoSimulacao } from '../models/simulacao.model';

@Injectable({
  providedIn: 'root'
})
export class CalculoService {
  
  // Função que faz o cálculo pesado
  simular(dados: SimulacaoInput): ResultadoSimulacao[] {
    const resultados: ResultadoSimulacao[] = [];
    let saldoTotal = dados.valorInicial;
    let totalInvestido = dados.valorInicial;
    
    // Converte taxa anual para mensal
    const taxaMensal = Math.pow(1 + dados.taxaJuros / 100, 1 / 12) - 1;

    for (let i = 1; i <= dados.periodoMeses; i++) {
      const jurosDoMes = saldoTotal * taxaMensal;
      saldoTotal += jurosDoMes + dados.aporteMensal;
      totalInvestido += dados.aporteMensal;

      resultados.push({
        mes: i,
        valorTotal: saldoTotal,
        totalInvestido: totalInvestido,
        totalJuros: saldoTotal - totalInvestido
      });
    }

    return resultados;
  }
}
