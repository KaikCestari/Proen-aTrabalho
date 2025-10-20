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
  template: `
    <section class="highlights">
      <header class="highlights__header">
        <h2>Destaques para você</h2>
        <p>Confira serviços digitais e programas de fidelidade inspirados nas melhores experiências.</p>
      </header>
      <div class="highlights__grid">
        <article *ngFor="let highlight of highlights">
          <span class="highlights__badge">{{ highlight.badge }}</span>
          <h3>{{ highlight.title }}</h3>
          <p>{{ highlight.description }}</p>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .highlights {
        background: linear-gradient(180deg, rgba(0, 113, 206, 0.08) 0%, rgba(0, 113, 206, 0) 100%);
        border-radius: 1.5rem;
        padding: 2.5rem;
        display: grid;
        gap: 2rem;
      }

      .highlights__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }

      article {
        background: #fff;
        border-radius: 1rem;
        padding: 1.75rem;
        display: grid;
        gap: 0.75rem;
        box-shadow: 0 1rem 2.5rem rgba(0, 20, 40, 0.08);
      }

      .highlights__badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.35rem 0.75rem;
        border-radius: 999px;
        background: rgba(0, 113, 206, 0.12);
        color: #1c3c78;
        font-weight: 700;
        font-size: 0.85rem;
        text-transform: uppercase;
      }

      h3 {
        margin: 0;
      }

      p {
        margin: 0;
        color: #475569;
      }
    `
  ]
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
