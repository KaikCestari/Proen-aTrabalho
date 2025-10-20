import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1>Bem-vindo ao Supermercado Proença</h1>
        <p>
          A melhor experiência de compras para toda a família. Oferecemos produtos frescos,
          ofertas especiais e atendimento acolhedor.
        </p>
        <div class="hero-actions">
          <a routerLink="/produtos" class="cta">Explorar Produtos</a>
          <a routerLink="/contato" class="secondary">Fale Conosco</a>
        </div>
      </div>
      <img src="assets/mercado-proenca.svg" alt="Corredor iluminado do supermercado Proença" />
    </section>

    <section>
      <h2>Diferenciais Proença</h2>
      <ul>
        <li>Seleção rigorosa de hortifrúti com produtores locais.</li>
        <li>Programa de fidelidade com descontos exclusivos todas as semanas.</li>
        <li>Entrega rápida em toda a região de Proença.</li>
      </ul>
    </section>
  `
})
export class HomeComponent {}
