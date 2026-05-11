import { Component, OnInit, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalculoService } from '../../../../core/services/calculo.service';
import { ResultadoSimulacao } from '../../../../core/models/simulacao.model';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit {
  private fb = inject(FormBuilder);
  private calculoService = inject(CalculoService);

  // Output para enviar os resultados para o componente pai (Home)
  aoSimular = output<ResultadoSimulacao[]>();

  form: FormGroup = this.fb.group({
    valorInicial: [1000, [Validators.required, Validators.min(0)]],
    aporteMensal: [100, [Validators.required, Validators.min(0)]],
    taxaJuros: [10, [Validators.required, Validators.min(0)]],
    periodoMeses: [12, [Validators.required, Validators.min(1)]]
  });

  ngOnInit() {
    // Escuta mudanças e calcula automaticamente
    this.form.valueChanges.subscribe(valores => {
      if (this.form.valid) {
        const resultado = this.calculoService.simular(valores);
        this.aoSimular.emit(resultado);
      }
    });

    // Simulação inicial ao carregar
    this.simularInicial();
  }

  private simularInicial() {
    const resultado = this.calculoService.simular(this.form.value);
    this.aoSimular.emit(resultado);
  }
}
