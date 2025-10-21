import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface FooterSection {
  title: string;
  links: string[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './index.html',
  styleUrl: './styles.scss'
})
export class FooterComponent {
  readonly sections: FooterSection[] = [
    {
      title: 'Ajuda',
      links: ['Central de Atendimento', 'Trocas e Devoluções', 'Entrega Expressa']
    },
    {
      title: 'Serviços',
      links: ['Cartão Proença', 'Clube de Ofertas', 'Gift Cards']
    },
    {
      title: 'Institucional',
      links: ['Sobre o Proença', 'Trabalhe Conosco', 'Sustentabilidade']
    }
  ];

  readonly currentYear = new Date().getFullYear();
}