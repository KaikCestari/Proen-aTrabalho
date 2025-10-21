import { Component, DestroyRef, inject } from '@angular/core';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CartService } from '../cart/cart.service';
import { CartEntry, ProductItem } from '../cart/cart.types';

interface ProductCategory {
  name: string;
  description: string;
  items: ProductItem[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe],
  templateUrl: './index.html',
  styleUrl: './styles.scss'
})
export class ProductsComponent {
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);
  readonly categories: ProductCategory[] = [
    {
      name: 'Hortifrúti',
      description: 'Frutas, verduras e legumes selecionados diariamente de produtores parceiros.',
      items: [
        { name: 'Manga Palmer', description: 'Doce e suculenta, ideal para sucos e sobremesas.', price: 6.49 },
        { name: 'Tomate Italiano', description: 'Perfeito para molhos encorpados e saladas frescas.', price: 5.29 },
        { name: 'Alface Crespa', description: 'Folhas crocantes colhidas ao amanhecer.', price: 3.99 },
        { name: 'Batata Doce Roxa', description: 'Fonte de energia para receitas saudáveis.', price: 4.89 }
      ]
    },
    {
      name: 'Mercearia',
      description: 'Itens essenciais para abastecer a despensa da família com economia.',
      items: [
        { name: 'Arroz Agulhinha 5kg', description: 'Grãos soltinhos e selecionados Proença.', price: 22.9 },
        { name: 'Feijão Carioca 1kg', description: 'Caldo cremoso e sabor caseiro garantido.', price: 8.59 },
        { name: 'Azeite Extra Virgem 500ml', description: 'Blend português com acidez controlada.', price: 27.5 },
        { name: 'Café Torrado e Moído 500g', description: 'Torra média com notas de chocolate.', price: 15.99 }
      ]
    },
    {
      name: 'Padaria',
      description: 'Pães artesanais e confeitaria fresca com receitas exclusivas Proença.',
      items: [
        { name: 'Pão de Fermentação Natural', description: 'Casca crocante e miolo leve.', price: 12.5 },
        { name: 'Croissant de Amêndoas', description: 'Folhado amanteigado com recheio cremoso.', price: 8.75 },
        { name: 'Bolo de Cenoura com Ganache', description: 'Clássico fofinho com cobertura intensa.', price: 24.9 },
        { name: 'Baguete Integral', description: 'Feita com grãos selecionados e mel.', price: 7.4 }
      ]
    },
    {
      name: 'Açougue',
      description: 'Carnes nobres com cortes especiais prontos para o seu churrasco.',
      items: [
        { name: 'Picanha Angus', description: 'Maturada e marmorizada na medida certa.', price: 79.9 },
        { name: 'Fraldinha Maturada', description: 'Maciez e suculência para o final de semana.', price: 49.9 },
        { name: 'Linguiça Artesanal de Ervas', description: 'Produção própria com especiarias frescas.', price: 32.5 },
        { name: 'Filé de Frango Orgânico', description: 'Criado sem antibióticos e com bem-estar garantido.', price: 29.9 }
      ]
    },
    {
      name: 'Bebidas & Laticínios',
      description: 'Refrigerados, sucos, cervejas especiais e laticínios selecionados.',
      items: [
        { name: 'Suco Natural de Laranja 1L', description: 'Prensado a frio, sem adição de açúcar.', price: 12.9 },
        { name: 'Cerveja Artesanal IPA', description: 'Rótulo exclusivo com lúpulos aromáticos.', price: 16.5 },
        { name: 'Iogurte Grego Tradicional', description: 'Textura cremosa com alto teor de proteína.', price: 5.99 },
        { name: 'Leite Integral 1L', description: 'Parceria com fazendas certificadas.', price: 4.39 }
      ]
    }
  ];

  cartItems: CartEntry[] = [];
  filteredCategories: ProductCategory[] = this.categories;
  currentQuery = '';
  private readonly destroyRef = inject(DestroyRef);

  constructor(private readonly route: ActivatedRoute) {
    this.cartService.items$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((items) => {
      this.cartItems = items;
    });

    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const term = (params.get('busca') ?? '').trim();
      this.currentQuery = term;
      this.filteredCategories = this.applySearch(term);
    });
  }

  addToCart(product: ProductItem): void {
    this.cartService.add(product);
  }

  increaseQuantity(product: ProductItem): void {
    this.cartService.increase(product);
  }

  decreaseQuantity(product: ProductItem): void {
    const entry = this.cartItems.find((item) => item.product.name === product.name);
    if (!entry) {
      return;
    }

    if (entry.quantity === 1) {
      this.cartService.remove(product);
    } else {
      this.cartService.decrease(product);
    }
  }

  removeFromCart(product: ProductItem): void {
    this.cartService.remove(product);
  }

  totalQuantity(): number {
    return this.cartService.totalQuantity();
  }

  cartTotal(): number {
    return this.cartService.totalValue();
  }

  navigateToCart(): void {
    if (this.cartItems.length === 0) {
      return;
    }

    this.router.navigate(['/carrinho']);
  }

  trackByCategory(index: number, category: ProductCategory): string {
    return category.name;
  }

  trackByItem(index: number, item: ProductItem): string {
    return item.name;
  }

  trackByCartItem(index: number, item: CartEntry): string {
    return item.product.name;
  }

  private applySearch(term: string): ProductCategory[] {
    const normalized = term.trim().toLowerCase();

    if (!normalized) {
      return this.categories;
    }

    return this.categories
      .map((category) => {
        const matchesCategory =
          category.name.toLowerCase().includes(normalized) ||
          category.description.toLowerCase().includes(normalized);

        const matchedItems = category.items.filter((item) => {
          const haystack = `${item.name} ${item.description}`.toLowerCase();
          return haystack.includes(normalized);
        });

        if (matchesCategory) {
          return category;
        }

        if (matchedItems.length > 0) {
          return {
            ...category,
            items: matchedItems
          };
        }

        return null;
      })
      .filter((category): category is ProductCategory => category !== null);
  }
}
