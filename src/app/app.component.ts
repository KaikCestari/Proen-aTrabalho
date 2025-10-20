import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header>
      <div class="logo">
        <strong>Supermercado Proença</strong>
      </div>
      <nav>
        <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Início</a>
        <a routerLink="produtos" routerLinkActive="active">Produtos</a>
        <a routerLink="contato" routerLinkActive="active">Contato</a>
      </nav>
    </header>
    <main>
      <router-outlet />
    </main>
    <footer>
      © {{ currentYear }} Supermercado Proença. Todos os direitos reservados.
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        background: linear-gradient(180deg, #d1fae5 0%, rgba(209, 250, 229, 0) 35%);
      }
      header .logo {
        font-size: 1.25rem;
        letter-spacing: 0.04em;
      }
    `
  ]
})
export class AppComponent {
  readonly currentYear = new Date().getFullYear();
}
