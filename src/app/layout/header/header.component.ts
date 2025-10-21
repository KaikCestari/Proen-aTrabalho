import { Component, DestroyRef, inject } from '@angular/core';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface HeaderLink {
  label: string;
  path: string;
  fragment?: string;
}

type HeaderIcon = 'benefits' | 'tracking' | 'cart';

interface HeaderAction {
  label: string;
  description: string;
  path: string;
  fragment?: string;
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
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  searchValue = '';

  constructor() {
    this.syncSearchFromUrl();

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.syncSearchFromUrl());
  }

  readonly mainLinks: HeaderLink[] = [
    { label: 'Início', path: '' },
    { label: 'Ofertas Relâmpago', path: '/produtos' },
    { label: 'Clube Proença', path: '', fragment: 'clube-beneficios' },
    { label: 'Rastreamento', path: '/produtos', fragment: 'rastreamento' },
    { label: 'Drogaria', path: '/produtos' },
    { label: 'Bebidas', path: '/produtos' },
    { label: 'Hortifruti', path: '/produtos' },
    { label: 'Casa & Limpeza', path: '/produtos' },
    { label: 'Beleza & Cuidados', path: '/produtos' },
    { label: 'Contato', path: '/contato' }
  ];

  readonly actions: HeaderAction[] = [
    {
      label: 'Clube Proença',
      description: 'Benefícios e cashback',
      path: '',
      fragment: 'clube-beneficios',
      icon: 'benefits'
    },
    {
      label: 'Acompanhar pedido',
      description: 'Status em tempo real',
      path: '/produtos',
      fragment: 'rastreamento',
      icon: 'tracking'
    },
    {
      label: 'Carrinho',
      description: 'Resumo de compras',
      path: '/carrinho',
      icon: 'cart'
    }
  ];

  onSearch(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement | null;
    if (!form) {
      return;
    }

    const input =
      (form.elements.namedItem('headerSearch') as HTMLInputElement | null) ??
      (form.querySelector('input[name="headerSearch"]') as HTMLInputElement | null);
    const query = input?.value.trim() ?? '';

    this.searchValue = query;
    const queryParams = query ? { busca: query } : {};
    this.router.navigate(['/produtos'], { queryParams });
  }

  private syncSearchFromUrl(): void {
    let route = this.router.routerState.snapshot.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    this.searchValue = route.queryParamMap?.get('busca')?.trim() ?? '';
  }
}
