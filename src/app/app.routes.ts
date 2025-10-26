import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { TrackingComponent } from './tracking/tracking.component';
import { BeneficiosClubeProencaComponent } from './home/components/beneficios-clube-proenca/beneficios-clube-proenca.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'Supermercado Proença - Início' },
  { path: 'beneficios-clube-proenca', component: BeneficiosClubeProencaComponent, title: 'Supermercado Proença - Clube Proença' },
  { path: 'produtos', component: ProductsComponent, title: 'Supermercado Proença - Produtos' },
  {
    path: 'minha-conta', component: MinhaContaComponent, title: 'Supermercado Proença - Minha Conta',
    children: [

      { path: 'perfil', component: MinhaContaComponent, title: 'Supermercado Proença - Meu Perfil' },
      { path: 'cashback', component: MinhaContaComponent, title: 'Supermercado Proença - Meu Cashback' },
      { path: 'pedidos', component: MinhaContaComponent, title: 'Supermercado Proença - Meus Pedidos' },
      { path: 'configuracoes', component: MinhaContaComponent, title: 'Supermercado Proença - Configurações' },
    ]
  },
  // { path: 'minha-conta/:tab', component: MinhaContaComponent, title: 'Supermercado Proença - Minha Conta' },
  { path: 'rastreamento', component: TrackingComponent, title: 'Supermercado Proença - Rastreamento' },
  { path: 'carrinho', component: CartComponent, title: 'Supermercado Proença - Carrinho' },
  { path: 'contato', component: ContactComponent, title: 'Supermercado Proença - Contato' },



  //MN VERIFICA ESSE ERRO QUE ESTÁ DANDO AQUI, O MENU DE "MINHA CONTA" NÃO ABRE QUANDO ESSA ROTA ESTÁ ATIVA, SE COMENTAR ELA
  //FUNCIONA NORMALMENTE, TALVEZ SEJA ALGUMA COISA DE CHILDREN.
  { path: '**', redirectTo: '' }
];
