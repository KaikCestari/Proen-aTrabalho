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
    <section>
      <h1>Nossos Produtos</h1>
      <p>
        Do hortifrúti ao açougue, selecionamos cuidadosamente os produtos para garantir frescor e qualidade.
      </p>
      <div class="grid">
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
      .grid {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }

      article {
        background: linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%);
        padding: 1.5rem;
        border-radius: 1rem;
        box-shadow: 0 1rem 2rem rgba(15, 118, 110, 0.1);
      }

      h2 {
        color: #0f766e;
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
