import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'Supermercado Proença - Início' },
  { path: 'produtos', component: ProductsComponent, title: 'Supermercado Proença - Produtos' },
  { path: 'contato', component: ContactComponent, title: 'Supermercado Proença - Contato' },
  { path: '**', redirectTo: '' }
];
