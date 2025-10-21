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
  templateUrl: './home-departments.html',
  styleUrl: './home-departments.scss'
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
