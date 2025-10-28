import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { TrackingComponent } from './tracking/tracking.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { ClubeBeneficioComponent } from './clube-beneficio/clube-beneficio.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'Supermercado Proença - Início' },
  { path: 'clube-beneficio', component: ClubeBeneficioComponent, title: 'Supermercado Proença - Clube de Benefícios' },
  { path: 'beneficios-clube-proenca', redirectTo: 'clube-beneficio', pathMatch: 'full' },
  { path: 'produtos', component: ProductsComponent, title: 'Supermercado Proença - Produtos' },
  { path: 'minha-conta', component: MinhaContaComponent, title: 'Supermercado Proença - Minha Conta' },
  { path: 'rastreamento', component: TrackingComponent, title: 'Supermercado Proença - Rastreamento' },
  { path: 'carrinho', component: CartComponent, title: 'Supermercado Proença - Carrinho' },
  { path: 'contato', component: ContactComponent, title: 'Supermercado Proença - Contato' },
  { path: '**', redirectTo: '' }
];
