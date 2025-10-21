import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ProductOffer {
  title: string;
  promo: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-home-highlights',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './home-highlights.html',
  styleUrl: './home-highlights.scss'
})
export class HomeHighlightsComponent {
  readonly offers: ProductOffer[] = [
    {
      title: 'Macarrão Barilla 500g',
      promo: 'Leve 4, pague 3',
      description: 'Estoque ideal para a semana com a qualidade que você já conhece.',
      image: 'https://via.placeholder.com/280x200/fafafa/0038a8?text=Macarrao+Barilla'
    },
    {
      title: 'Café Proença Especial 500g',
      promo: '2ª unidade com 25% OFF',
      description: 'Blend torrado e moído exclusivo do Clube Proença inspirado no sabor Carrefour.',
      image: 'https://via.placeholder.com/280x200/f5f5f5/e1001a?text=Cafe+Especial'
    },
    {
      title: 'Detergente Líquido 3L',
      promo: 'Economia do mês',
      description: 'Limpeza profunda com fragrância suave e rendimento surpreendente.',
      image: 'https://via.placeholder.com/280x200/ffffff/0038a8?text=Detergente'
    },
    {
      title: 'Vinho Chileno Reservado',
      promo: '30% de desconto',
      description: 'Seleção especial para harmonizar com momentos únicos ao melhor preço.',
      image: 'https://via.placeholder.com/280x200/f0f4ff/0038a8?text=Vinho+Reservado'
    },
    {
      title: 'Kit Cuidados Diários',
      promo: 'Compre 3 e ganhe necessaire',
      description: 'Produtos de higiene pessoal com brindes exclusivos do Supermercado Proença.',
      image: 'https://via.placeholder.com/280x200/fff1f3/e1001a?text=Cuidados+Diarios'
    }
  ];
}
