import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface ProductCategory {
  name: string;
  description: string;
  items: string[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="products">
      <header class="products__header">
        <h1>Nossos Produtos</h1>
        <p>
          Do hortifrúti ao açougue, selecionamos cuidadosamente os produtos para garantir frescor e
          qualidade.
        </p>
      </header>
      <div class="products__grid">
        <article *ngFor="let category of categories">
          <h2>{{ category.name }}</h2>
          <p>{{ category.description }}</p>
          <ul>
            <li *ngFor="let item of category.items">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .products {
        background: #fff;
        border-radius: 1.5rem;
        padding: clamp(2rem, 4vw, 3rem);
        box-shadow: 0 1.5rem 3rem rgba(7, 47, 107, 0.08);
        display: grid;
        gap: 2rem;
      }

      .products__header h1 {
        margin: 0;
        font-size: clamp(2rem, 3vw, 2.5rem);
      }

      .products__grid {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      }

      article {
        background: linear-gradient(180deg, rgba(0, 113, 206, 0.08) 0%, rgba(0, 113, 206, 0) 100%);
        padding: 1.75rem;
        border-radius: 1.25rem;
        border: 1px solid rgba(7, 47, 107, 0.1);
        display: grid;
        gap: 0.75rem;
      }

      h2 {
        color: #1c3c78;
        margin: 0;
      }

      ul {
        padding-left: 1.25rem;
        margin: 0;
        color: #475569;
      }
    `
  ]
})
export class ProductsComponent {
  readonly categories: ProductCategory[] = [
    {
      name: 'Hortifrúti',
      description: 'Frutas, verduras e legumes selecionados diariamente de produtores parceiros.',
      items: ['Manga Palmer', 'Tomate Italiano', 'Alface Crespa', 'Batata Doce']
    },
    {
      name: 'Padaria',
      description: 'Pães artesanais e confeitaria fresca com receitas exclusivas Proença.',
      items: ['Pão de Fermentação Natural', 'Croissant de Amêndoas', 'Bolo de Cenoura com Ganache']
    },
    {
      name: 'Açougue',
      description: 'Carnes nobres com cortes especiais prontos para o seu churrasco.',
      items: ['Picanha Angus', 'Fraldinha Maturada', 'Linguiça Artesanal de Ervas']
    }
  ];
}
