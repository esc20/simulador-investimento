import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoCardsComponent } from './resultado-cards.component';

describe('ResultadoCardsComponent', () => {
  let component: ResultadoCardsComponent;
  let fixture: ComponentFixture<ResultadoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
