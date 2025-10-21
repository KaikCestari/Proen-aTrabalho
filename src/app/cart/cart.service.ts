import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartEntry, ProductItem } from './cart.types';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly itemsSubject = new BehaviorSubject<CartEntry[]>([]);
  readonly items$ = this.itemsSubject.asObservable();

  add(product: ProductItem): void {
    const items = this.itemsSubject.value;
    const existing = items.find((entry) => entry.product.name === product.name);

    if (existing) {
      const next = items.map((entry) =>
        entry.product.name === product.name ? { ...entry, quantity: entry.quantity + 1 } : entry
      );
      this.itemsSubject.next(next);
      return;
    }

    this.itemsSubject.next([...items, { product, quantity: 1 }]);
  }

  increase(product: ProductItem): void {
    const items = this.itemsSubject.value;
    const exists = items.some((entry) => entry.product.name === product.name);

    if (!exists) {
      this.add(product);
      return;
    }

    const next = items.map((entry) =>
      entry.product.name === product.name ? { ...entry, quantity: entry.quantity + 1 } : entry
    );
    this.itemsSubject.next(next);
  }

  decrease(product: ProductItem): void {
    const items = this.itemsSubject.value;
    const exists = items.some((entry) => entry.product.name === product.name);

    if (!exists) {
      return;
    }

    const next = items
      .map((entry) =>
        entry.product.name === product.name ? { ...entry, quantity: entry.quantity - 1 } : entry
      )
      .filter((entry) => entry.quantity > 0);

    this.itemsSubject.next(next);
  }

  remove(product: ProductItem): void {
    const next = this.itemsSubject.value.filter((entry) => entry.product.name !== product.name);
    this.itemsSubject.next(next);
  }

  clear(): void {
    this.itemsSubject.next([]);
  }

  totalQuantity(): number {
    return this.itemsSubject.value.reduce((total, entry) => total + entry.quantity, 0);
  }

  totalValue(): number {
    return this.itemsSubject.value.reduce(
      (total, entry) => total + entry.product.price * entry.quantity,
      0
    );
  }

  snapshot(): CartEntry[] {
    return this.itemsSubject.value;
  }
}
