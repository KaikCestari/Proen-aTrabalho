import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Highlight {
  title: string;
  description: string;
  badge: string;
}

@Component({
  selector: 'app-home-highlights',
  standalone: true,
  imports: [NgFor],
  templateUrl: './index.html',
  styleUrl: './styles.scss'
})
export class HomeHighlightsComponent {
  readonly highlights: Highlight[] = [
    {
      title: 'Retira Rápido',
      description: 'Compre online e retire na loja em até 2 horas com comunicação em tempo real.',
      badge: 'Clique & Retire'
    },
    {
      title: 'Entrega Programada',
      description: 'Escolha o melhor horário para receber suas compras em casa, sem surpresas.',
      badge: 'Delivery'
    },
    {
      title: 'Cashback Clube',
      description: 'Acumule cashback nas compras do mês e utilize nos próximos pedidos.',
      badge: 'Cashback'
    },
    {
      title: 'App Proença',
      description: 'Promoções exclusivas, pagamento por QR Code e lista compartilhada com a família.',
      badge: 'Digital'
    }
  ];
}
