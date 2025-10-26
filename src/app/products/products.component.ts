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
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);
  readonly categories: ProductCategory[] = [
    {
      name: 'Hortifrúti',
      description: 'Frutas, verduras e legumes selecionados diariamente de produtores parceiros.',
      items: [
        {
          name: 'Manga Palmer',
          description: 'Doce e suculenta, ideal para sucos e sobremesas.',
          price: 6.49,
          imageUrl: 'https://cdn.awsli.com.br/800x800/1348/1348550/produto/96564150/e946623dfc.jpg'
        },
        {
          name: 'Tomate Italiano',
          description: 'Perfeito para molhos encorpados e saladas frescas.',
          price: 5.29,
          imageUrl: 'https://i.ytimg.com/vi/D5BXwG5er8Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD4kCyH-f_kQIgnAjgDmBybER-Gsg'
        },
        {
          name: 'Alface Crespa',
          description: 'Folhas crocantes colhidas ao amanhecer.',
          price: 3.99,
          imageUrl: 'https://agristar.com.br/upload/products/original/04008.jpg'
        },
        {
          name: 'Batata Doce Roxa',
          description: 'Fonte de energia para receitas saudáveis.',
          price: 4.89,
          imageUrl: 'https://www.embrapa.br/bme_images/m/244080040m.jpg'
        }
      ]
    },
    {
      name: 'Mercearia',
      description: 'Itens essenciais para abastecer a despensa da família com economia.',
      items: [
        {
          name: 'Arroz Agulhinha 5kg',
          description: 'Grãos soltinhos e selecionados Proença.',
          price: 22.9,
          imageUrl: 'https://acdn-us.mitiendanube.com/stores/798/671/products/arroz-paulista1-9eddb53166f4b70c4215336573104358-640-0.jpg'
        },
        {
          name: 'Feijão Carioca 1kg',
          description: 'Caldo cremoso e sabor caseiro garantido.',
          price: 8.59,
          imageUrl: 'https://www.atacadoprodutosnaturais.com.br/wp-content/uploads/2024/04/15261099369_feijao-carioca-principal-relva-verde.jpg'
        },
        {
          name: 'Azeite Extra Virgem 500ml',
          description: 'Blend português com acidez controlada.',
          price: 27.5,
          imageUrl: 'https://acdn-us.mitiendanube.com/stores/001/188/594/products/11-e726548ef15279002216649990070294-1024-1024.jpg'
        },
        {
          name: 'Café Torrado e Moído 500g',
          description: 'Torra média com notas de chocolate.',
          price: 15.99,
          imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    {
      name: 'Padaria',
      description: 'Pães artesanais e confeitaria fresca com receitas exclusivas Proença.',
      items: [
        {
          name: 'Pão de Fermentação Natural',
          description: 'Casca crocante e miolo leve.',
          price: 12.5,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Oek0woayzJuiXtIp9iDwObrjtjcypSi6Pg&s'
        },
        {
          name: 'Croissant de Amêndoas',
          description: 'Folhado amanteigado com recheio cremoso.',
          price: 8.75,
          imageUrl: 'https://img.band.com.br/image/2023/03/10/croissant-12316.jpg'
        },
        {
          name: 'Bolo de Cenoura com Ganache',
          description: 'Clássico fofinho com cobertura intensa.',
          price: 24.9,
          imageUrl: 'https://s2-receitas.glbimg.com/uPaa4DqJ3jIyee1w_KHQhVimQWk=/0x0:5472x3648/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/2/z/wnk5GRQxS3BPlCBik1qA/bolo-de-cenoura-com-ganache1.jpg'
        },
        {
          name: 'Baguete Integral',
          description: 'Feita com grãos selecionados e mel.',
          price: 7.4,
          imageUrl: 'https://www.donamaria.com.br/wp-content/uploads/2021/06/farinhadonamaria-pao-integral.jpeg'
        }
      ]
    },
    {
      name: 'Açougue',
      description: 'Carnes nobres com cortes especiais prontos para o seu churrasco.',
      items: [
        {
          name: 'Picanha Angus',
          description: 'Maturada e marmorizada na medida certa.',
          price: 79.9,
          imageUrl: 'https://vpjalimentos.com.br/wp-content/uploads/2019/11/fff.jpg'
        },
        {
          name: 'Fraldinha Maturada',
          description: 'Maciez e suculência para o final de semana.',
          price: 49.9,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWWr2BqvwivoWzRzGy0Vd5uwYL7gAlhrBKxA&s'
        },
        {
          name: 'Linguiça Artesanal de Ervas',
          description: 'Produção própria com especiarias frescas.',
          price: 32.5,
          imageUrl: 'https://images.tcdn.com.br/img/img_prod/854660/linguica_toscana_ervas_finas_300gr_congelada_219_1_0de92f8c5d40f17688d0d61238b0706f.jpg'
        },
        {
          name: 'Filé de Frango Orgânico',
          description: 'Criado sem antibióticos e com bem-estar garantido.',
          price: 29.9,
          imageUrl: 'https://images.tcdn.com.br/img/img_prod/905552/file_de_peito_de_frango_linha_organica_700g_congelado_2135_1_0ba7b0680703dadc00a4ad9d749f27b7.jpg'
        }
      ]
    },
    {
      name: 'Bebidas & Laticínios',
      description: 'Refrigerados, sucos, cervejas especiais e laticínios selecionados.',
      items: [
        {
          name: 'Suco Natural de Laranja 1L',
          description: 'Prensado a frio, sem adição de açúcar.',
          price: 12.9,
          imageUrl: 'https://organicosinbox.com.br/wp-content/uploads/2021/07/suco-de-laranja-organico-1-litro-native.jpg'
        },
        {
          name: 'Cerveja Artesanal IPA',
          description: 'Rótulo exclusivo com lúpulos aromáticos.',
          price: 16.5,
          imageUrl: 'https://cdn.awsli.com.br/600x450/1983/1983606/produto/111849017/83953b3572.jpg'
        },
        {
          name: 'Iogurte Grego Tradicional',
          description: 'Textura cremosa com alto teor de proteína.',
          price: 5.99,
          imageUrl: 'https://superprix.vteximg.com.br/arquivos/ids/226430-600-600/7891000092453---Iogurte-NESTLE-GREGO-tradicional-400g---1.jpg?v=638774757193970000'
        },
        {
          name: 'Leite Integral 1L',
          description: 'Parceria com fazendas certificadas.',
          price: 4.39,
          imageUrl: 'https://i3-imagens-prd.araujo.com.br/webp/9785/202728_7896051111016_2.webp'
        }
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
