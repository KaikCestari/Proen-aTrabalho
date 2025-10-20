import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface HeaderLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './index.html',
  styleUrl: './styles.scss'
})
export class HeaderComponent {
  searchQuery = '';

  constructor(private readonly router: Router) {}

  readonly mainLinks: HeaderLink[] = [
    { label: 'Início', path: '' },
    { label: 'Ofertas do Dia', path: '/produtos' },
    { label: 'Mercearia', path: '/produtos' },
    { label: 'Bebidas', path: '/produtos' },
    { label: 'Higiene & Beleza', path: '/produtos' },
    { label: 'Casa & Limpeza', path: '/produtos' },
    { label: 'Contato', path: '/contato' }
  ];

  onSearch(event: Event): void {
    event.preventDefault();
    const query = this.searchQuery.trim();

    if (!query) {
      this.router.navigate(['/produtos']);
      return;
    }

    this.router.navigate(['/produtos'], {
      queryParams: { busca: query }
    });
  }
}
