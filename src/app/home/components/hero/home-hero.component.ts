import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero__copy">
        <p class="hero__tag">Inspiração Carrefour</p>
        <h1>Seu supermercado completo com ofertas todos os dias</h1>
        <p>
          Faça suas compras com a experiência digital do Proença. Retire na loja, receba em casa ou agende
          pelo aplicativo.
        </p>
        <div class="hero__actions">
          <a routerLink="/produtos" class="hero__cta">Ver ofertas exclusivas</a>
          <a routerLink="/contato" class="hero__link">Encontre a loja mais próxima</a>
        </div>
      </div>
      <figure class="hero__visual" aria-hidden="true">
        <img src="assets/home-hero.svg" alt="" />
      </figure>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .hero {
        background: linear-gradient(135deg, #0071ce 0%, #1c3c78 100%);
        color: #fff;
        border-radius: 1.5rem;
        padding: 3rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        align-items: center;
        overflow: hidden;
        position: relative;
      }

      .hero__tag {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem 0.75rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.2);
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.8rem;
        letter-spacing: 0.08em;
      }

      h1 {
        font-size: clamp(2rem, 4vw, 3rem);
        margin: 0.75rem 0;
      }

      p {
        font-size: 1.05rem;
        line-height: 1.6;
        margin: 0;
      }

      .hero__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1.5rem;
      }

      .hero__cta {
        background: #ffb600;
        color: #001f3f;
        padding: 0.9rem 1.75rem;
        border-radius: 999px;
        font-weight: 700;
        text-decoration: none;
        box-shadow: 0 1rem 2.5rem rgba(0, 31, 63, 0.25);
      }

      .hero__cta:hover {
        filter: brightness(1.05);
      }

      .hero__link {
        color: #fff;
        font-weight: 600;
        text-decoration: none;
      }

      .hero__visual img {
        width: 100%;
        max-width: 420px;
        margin: 0 auto;
        display: block;
      }

      @media (max-width: 768px) {
        .hero {
          padding: 2.25rem;
        }
      }
    `
  ]
})
export class HomeHeroComponent {}
