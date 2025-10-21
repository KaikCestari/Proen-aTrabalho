import { Component } from '@angular/core';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface HeaderLink {
  label: string;
  path: string;
}

type HeaderIcon = 'login' | 'benefits' | 'orders' | 'cart';

interface HeaderAction {
  label: string;
  description: string;
  path: string;
  icon: HeaderIcon;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, RouterLink, RouterLinkActive],
  templateUrl: './index.html',
  styleUrl: './styles.scss'
})
export class HeaderComponent {
  readonly mainLinks: HeaderLink[] = [
    { label: 'Todos os Corredores', path: '' },
    { label: 'Ofertas Relâmpago', path: '/produtos' },
    { label: 'Drogaria', path: '/produtos' },
    { label: 'Bebidas', path: '/produtos' },
    { label: 'Hortifruti', path: '/produtos' },
    { label: 'Casa & Limpeza', path: '/produtos' },
    { label: 'Beleza & Cuidados', path: '/produtos' },
    { label: 'Mundo Pet', path: '/produtos' },
    { label: 'Contato', path: '/contato' }
  ];

  readonly actions: HeaderAction[] = [
    {
      label: 'Entrar',
      description: 'Minha conta',
      path: '/contato',
      icon: 'login'
    },
    {
      label: 'Benefícios',
      description: 'Clube Proença',
      path: '/produtos',
      icon: 'benefits'
    },
    {
      label: 'Pedidos',
      description: 'Acompanhe',
      path: '/produtos',
      icon: 'orders'
    },
    {
      label: 'Carrinho',
      description: '0 itens',
      path: '/produtos',
      icon: 'cart'
    }
  ];

  onSearch(event: Event): void {
    event.preventDefault();
  }
}
