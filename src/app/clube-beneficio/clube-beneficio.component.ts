import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BenefitFeature {
  title: string;
  description: string;
  accent: string;
}

interface ClubeStep {
  title: string;
  detail: string;
}

@Component({
  selector: 'app-clube-beneficio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './clube-beneficio.component.html',
  styleUrls: ['./clube-beneficio.component.scss']
})
export class ClubeBeneficioComponent {
  readonly features: BenefitFeature[] = [
    {
      title: 'Cashback imediato',
      description: 'Receba parte do valor das suas compras em créditos que podem ser usados já no próximo pedido.',
      accent: '5%'
    },
    {
      title: 'Ofertas exclusivas',
      description: 'Acesso antecipado a campanhas e combos especiais reservados para membros do clube.',
      accent: 'VIP'
    },
    {
      title: 'Frete inteligente',
      description: 'Calcule o frete melhor para você com base no histórico de compras e pontos do clube.',
      accent: 'Smart'
    }
  ];

  readonly steps: ClubeStep[] = [
    { title: 'Cadastre-se', detail: 'Use o seu CPF para ativar a conta Proença e aceite participar do clube.' },
    { title: 'Compre com o selo', detail: 'Procure pelos produtos com a tag Clube Proença e finalize a compra normalmente.' },
    { title: 'Ative seu cashback', detail: 'O crédito cai automaticamente. É só ativar na sua próxima compra ou guardar para uma data especial.' }
  ];
}
