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
  template: `
    <header class="header">
      <div class="header__top">
        <span class="header__badge">Clube Proença</span>
        <span class="header__help">Atendimento 24h · 0800 123 456</span>
      </div>
      <div class="header__main">
        <a class="header__brand" routerLink="">
          <img src="assets/logo-proenca.svg" alt="Logo Proença" />
          <div>
            <strong>Proença</strong>
            <small>Supermercados</small>
          </div>
        </a>
        <form class="header__search" role="search" (submit)="preventDefault($event)">
          <label class="sr-only" for="header-search">Buscar produtos</label>
          <input id="header-search" type="search" placeholder="O que você procura hoje?" />
          <button type="submit">Buscar</button>
        </form>
        <nav class="header__shortcuts" aria-label="Acesso rápido">
          <a routerLink="/produtos" routerLinkActive="active">Ofertas</a>
          <a routerLink="/produtos" routerLinkActive="active">Cartão Proença</a>
          <a routerLink="/contato" routerLinkActive="active">Nossas Lojas</a>
        </nav>
      </div>
      <nav class="header__nav" aria-label="Categorias principais">
        <a
          *ngFor="let link of mainLinks"
          [routerLink]="link.path"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: link.path === '' }"
        >
          {{ link.label }}
        </a>
      </nav>
    </header>
  `,
  styles: [
    `
      :host {
        display: block;
        background: linear-gradient(90deg, #001f3f 0%, #0071ce 100%);
        color: #fff;
      }

      .header {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .header__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.25rem 2rem;
        font-size: 0.85rem;
        background: rgba(255, 255, 255, 0.08);
      }

      .header__badge {
        background: rgba(255, 255, 255, 0.2);
        padding: 0.2rem 0.75rem;
        border-radius: 999px;
        font-weight: 600;
      }

      .header__main {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 1.5rem;
        padding: 0.75rem 2rem;
      }

      .header__brand {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        text-decoration: none;
        color: inherit;
      }

      .header__brand img {
        width: 48px;
        height: 48px;
      }

      .header__brand strong {
        font-size: 1.25rem;
        letter-spacing: 0.02em;
      }

      .header__search {
        display: grid;
        grid-template-columns: 1fr auto;
        border-radius: 999px;
        overflow: hidden;
        background: #fff;
      }

      .header__search input {
        padding: 0.75rem 1rem;
        border: none;
        outline: none;
        font: inherit;
      }

      .header__search button {
        border: none;
        padding: 0 1.5rem;
        background: #ffb600;
        color: #001f3f;
        font-weight: 700;
        cursor: pointer;
      }

      .header__shortcuts {
        display: flex;
        gap: 1rem;
        font-size: 0.95rem;
      }

      .header__shortcuts a {
        color: inherit;
        text-decoration: none;
        font-weight: 600;
      }

      .header__nav {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 0 2rem 0.75rem;
        font-size: 0.95rem;
      }

      .header__nav a {
        color: rgba(255, 255, 255, 0.85);
        text-decoration: none;
        font-weight: 600;
        padding-bottom: 0.25rem;
        border-bottom: 3px solid transparent;
        transition: border-color 0.2s ease;
      }

      .header__nav a.active,
      .header__nav a:hover {
        border-color: #ffb600;
        color: #fff;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }

      @media (max-width: 960px) {
        .header__top {
          display: none;
        }

        .header__main {
          grid-template-columns: 1fr;
          justify-items: center;
        }

        .header__search {
          width: 100%;
        }

        .header__shortcuts {
          display: none;
        }

        .header__nav {
          justify-content: center;
        }
      }
    `
  ]
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
