import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosClubeProencaComponent } from './beneficios-clube-proenca.component';

describe('BeneficiosClubeProencaComponent', () => {
  let component: BeneficiosClubeProencaComponent;
  let fixture: ComponentFixture<BeneficiosClubeProencaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiosClubeProencaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeneficiosClubeProencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
