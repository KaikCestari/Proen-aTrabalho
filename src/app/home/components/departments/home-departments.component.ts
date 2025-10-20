import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Department {
  name: string;
  description: string;
  color: string;
  icon: string;
}

@Component({
  selector: 'app-home-departments',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="departments">
      <header class="departments__header">
        <h2>Compre por departamento</h2>
        <p>Seleção rápida inspirada na vitrine digital do Carrefour para facilitar suas compras.</p>
      </header>
      <div class="departments__grid">
        <article *ngFor="let department of departments" [style.--badge-color]="department.color">
          <span class="departments__icon">{{ department.icon }}</span>
          <h3>{{ department.name }}</h3>
          <p>{{ department.description }}</p>
          <a href="#">Ver ofertas</a>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .departments {
        background: #fff;
        border-radius: 1.5rem;
        padding: 2.5rem;
        display: grid;
        gap: 2rem;
        box-shadow: 0 1.5rem 3rem rgba(0, 20, 40, 0.08);
      }

      .departments__header h2 {
        margin: 0;
        font-size: 2rem;
      }

      .departments__grid {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }

      article {
        padding: 1.75rem;
        border-radius: 1.25rem;
        background: linear-gradient(160deg, rgba(0, 113, 206, 0.08) 0%, rgba(0, 113, 206, 0) 100%);
        display: grid;
        gap: 0.75rem;
        border: 1px solid rgba(0, 113, 206, 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      article:hover {
        transform: translateY(-4px);
        box-shadow: 0 1.25rem 2.5rem rgba(0, 20, 40, 0.12);
      }

      .departments__icon {
        width: 3rem;
        height: 3rem;
        border-radius: 0.75rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        background: var(--badge-color);
        color: #fff;
      }

      a {
        font-weight: 600;
        color: #0071ce;
        text-decoration: none;
      }
    `
  ]
})
export class HomeDepartmentsComponent {
  readonly departments: Department[] = [
    {
      name: 'Hortifrúti Fresco',
      description: 'Frutas, verduras e legumes direto dos nossos produtores parceiros.',
      color: '#2dd4bf',
      icon: '🥬'
    },
    {
      name: 'Padaria Artesanal',
      description: 'Pães quentinhos, bolos especiais e doces para qualquer momento.',
      color: '#f97316',
      icon: '🥐'
    },
    {
      name: 'Bebidas e Vinhos',
      description: 'Rótulos nacionais e importados com condições especiais no Clube Proença.',
      color: '#8b5cf6',
      icon: '🍷'
    },
    {
      name: 'Limpeza e Casa',
      description: 'Tudo para manter sua casa organizada com economia o mês inteiro.',
      color: '#0ea5e9',
      icon: '🧼'
    }
  ];
}
