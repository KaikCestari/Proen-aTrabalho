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
  template: `
    <footer class="footer">
      <div class="footer__grid">
        <section class="footer__brand">
          <strong>Supermercado Proença</strong>
          <p>
            Inspirado na experiência Carrefour, entregamos praticidade, ofertas exclusivas e serviços
            digitais para transformar a rotina de compras dos nossos clientes.
          </p>
        </section>
        <section *ngFor="let section of sections" class="footer__section">
          <h3>{{ section.title }}</h3>
          <ul>
            <li *ngFor="let link of section.links">
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </section>
        <section class="footer__contact">
          <h3>Fale com a gente</h3>
          <p>Central de relacionamento: 0800 123 456</p>
          <p>Whatsapp: (11) 90000-0000</p>
          <p>Segunda a sábado das 8h às 22h</p>
        </section>
      </div>
      <div class="footer__bottom">
        <small>© {{ currentYear }} Supermercado Proença. Todos os direitos reservados.</small>
        <small>Política de Privacidade · Termos de Uso</small>
      </div>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
        background: #001f3f;
        color: rgba(255, 255, 255, 0.9);
      }

      .footer {
        padding: 3rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .footer__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 1.5rem 3rem;
      }

      .footer__brand strong {
        font-size: 1.25rem;
      }

      h3 {
        color: #ffb600;
        font-size: 1rem;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      a {
        color: inherit;
        text-decoration: none;
        opacity: 0.75;
      }

      a:hover {
        opacity: 1;
      }

      .footer__bottom {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;
        font-size: 0.85rem;
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        padding-top: 1rem;
      }

      @media (max-width: 768px) {
        .footer {
          padding: 2rem 1.25rem;
        }
      }
    `
  ]
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
