import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'Supermercado Proença - Início' },
  { path: 'produtos', component: ProductsComponent, title: 'Supermercado Proença - Produtos' },
  { path: 'carrinho', component: CartComponent, title: 'Supermercado Proença - Carrinho' },
  { path: 'contato', component: ContactComponent, title: 'Supermercado Proença - Contato' },
  { path: '**', redirectTo: '' }
];
