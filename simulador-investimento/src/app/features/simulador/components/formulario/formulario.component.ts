import { Component, OnInit, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalculoService } from '../../../../core/services/calculo.service';
import { SimulacaoInput } from '../../../../core/models/simulacao.model';

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
  private readonly STORAGE_KEY = 'apex_invest_dados';

  aoSimular = output<any>();

  form: FormGroup = this.fb.group({
    valorInicial: [1000, [Validators.required, Validators.min(0)]],
    aporteMensal: [100, [Validators.required, Validators.min(0)]],
    taxaJuros: [10, [Validators.required, Validators.min(0)]],
    periodoMeses: [12, [Validators.required, Validators.min(1)]]
  });

  ngOnInit() {
    this.carregarDadosSalvos();

    // Escuta mudanças, salva no storage e emite o cálculo automaticamente
    this.form.valueChanges.subscribe(valores => {
      if (this.form.valid) {
        this.salvarNoStorage(valores);
        const resultado = this.calculoService.simular(valores);
        this.aoSimular.emit(resultado);
      }
    });

    this.simularInicial();
  }

  
  resetarFormulario() {
    const valoresPadrao = {
      valorInicial: 1000,
      aporteMensal: 100,
      taxaJuros: 10,
      periodoMeses: 12
    };

    localStorage.removeItem(this.STORAGE_KEY);
    
    
    this.form.reset(valoresPadrao);
    
    
    const resultado = this.calculoService.simular(valoresPadrao);
    this.aoSimular.emit(resultado);
  }

  private salvarNoStorage(dados: SimulacaoInput) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(dados));
  }

  private carregarDadosSalvos() {
    const salvo = localStorage.getItem(this.STORAGE_KEY);
    if (salvo) {
      
      this.form.patchValue(JSON.parse(salvo), { emitEvent: false });
    }
  }

  private simularInicial() {
    const resultado = this.calculoService.simular(this.form.value);
    this.aoSimular.emit(resultado);
  }
}
