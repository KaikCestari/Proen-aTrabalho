import { Component } from '@angular/core';
<<<<<<< HEAD
import { NgFor } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
=======
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
>>>>>>> origin/main

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
<<<<<<< HEAD
  imports: [NgFor, RouterLink, RouterLinkActive, FormsModule],
=======
  imports: [NgFor, NgSwitch, NgSwitchCase, RouterLink, RouterLinkActive],
>>>>>>> origin/main
  templateUrl: './index.html',
  styleUrl: './styles.scss'
})
export class HeaderComponent {
  searchQuery = '';

  constructor(private readonly router: Router) {}

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

<<<<<<< HEAD
  onSearch(event: Event): void {
=======
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

  preventDefault(event: Event): void {
>>>>>>> origin/main
    event.preventDefault();
    const query = this.searchQuery.trim();

    if (!query) {
      this.router.navigate(['/produtos']);
      return;
    }

    this.router.navigate(['/produtos'], {
      queryParams: { busca: query }
    });
  }
}
