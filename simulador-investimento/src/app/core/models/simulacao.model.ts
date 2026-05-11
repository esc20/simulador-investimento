// src/app/core/models/simulacao.model.ts

export interface SimulacaoInput {
  valorInicial: number;
  aporteMensal: number;
  taxaJuros: number;
  periodoMeses: number;
}

export interface ResultadoSimulacao {
  mes: number;
  valorTotal: number;
  totalInvestido: number;
  totalJuros: number;
}
