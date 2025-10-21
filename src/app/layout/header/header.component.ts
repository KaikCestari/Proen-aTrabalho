import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface HeaderLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  templateUrl: './index.html',
  styleUrl: './styles.scss'
})
export class HeaderComponent {
  readonly mainLinks: HeaderLink[] = [
    { label: 'Início', path: '' },
    { label: 'Ofertas do Dia', path: '/produtos' },
    { label: 'Mercearia', path: '/produtos' },
    { label: 'Bebidas', path: '/produtos' },
    { label: 'Higiene & Beleza', path: '/produtos' },
    { label: 'Casa & Limpeza', path: '/produtos' },
    { label: 'Contato', path: '/contato' }
  ];

  preventDefault(event: Event): void {
    event.preventDefault();
  }
}
