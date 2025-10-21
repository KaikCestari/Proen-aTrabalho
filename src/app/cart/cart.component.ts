import { Component, DestroyRef, inject } from '@angular/core';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CartService } from './cart.service';
import { CartEntry, ProductItem } from './cart.types';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class CartComponent {
  cartItems: CartEntry[] = [];
  pixCheckoutVisible = false;
  pixCode = '';
  pixQrDataUrl = '';
  pixCopied = false;
  private readonly cartService = inject(CartService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.cartService.items$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((items) => {
      this.cartItems = items;
      if (items.length === 0) {
        this.resetPixCheckout();
      }
    });
  }

  totalQuantity(): number {
    return this.cartService.totalQuantity();
  }

  cartTotal(): number {
    return this.cartService.totalValue();
  }

  increaseQuantity(product: ProductItem): void {
    this.cartService.increase(product);
    this.resetPixCheckout();
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

    this.resetPixCheckout();
  }

  removeFromCart(product: ProductItem): void {
    this.cartService.remove(product);
    this.resetPixCheckout();
  }

  finalizeCheckout(): void {
    if (this.cartItems.length === 0) {
      return;
    }

    const total = this.cartTotal();
    this.pixCode = this.generatePixPayload(total);
    this.pixQrDataUrl = this.generatePixQr(this.pixCode);
    this.pixCheckoutVisible = true;
    this.pixCopied = false;
  }

  copyPixCode(): void {
    if (!this.pixCode) {
      return;
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(this.pixCode)
        .then(() => (this.pixCopied = true))
        .catch(() => (this.pixCopied = true));
    } else {
      this.pixCopied = true;
    }
  }

  trackByCartItem(index: number, item: CartEntry): string {
    return item.product.name;
  }

  private generatePixPayload(total: number): string {
    const cents = total.toFixed(2).replace('.', '');
    const timestamp = Date.now().toString(36).toUpperCase();
    return `000201BR.GOV.BCB.PIX-CLUBE-PROENCA52040000530398654${cents.padStart(
      4,
      '0'
    )}5802BR5920SUPERMERCADO PROENCA6009ANDRADINA62070503***6304${timestamp}`;
  }

  private generatePixQr(payload: string): string {
    const size = 25;
    const modules: string[] = [];

    for (let y = 0; y < size; y += 1) {
      for (let x = 0; x < size; x += 1) {
        const charCode = payload.charCodeAt((x + y * size) % payload.length);
        if ((charCode + x * 3 + y * 7) % 5 === 0 || ((x + y) % 7 === 0 && charCode % 2 === 0)) {
          modules.push(`<rect x="${x}" y="${y}" width="1" height="1" fill="#0f172a"/>`);
        }
      }
    }

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges"><rect width="${size}" height="${size}" fill="#ffffff"/>${modules.join(
      ''
    )}</svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  private resetPixCheckout(): void {
    this.pixCheckoutVisible = false;
    this.pixCode = '';
    this.pixQrDataUrl = '';
    this.pixCopied = false;
  }
}
