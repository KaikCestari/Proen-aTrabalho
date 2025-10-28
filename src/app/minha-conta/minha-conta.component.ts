import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Necessário para *ngIf, *ngFor

// Interface para os links de navegação
interface ContaLink {
  label: string;
  path: string; // O segmento da rota (ex: 'dados-pessoais')
  iconClass: string; // Classe para ícone
}

@Component({
  selector: 'app-minha-conta',
  standalone: true,
  imports: [RouterModule, CommonModule], // Importa módulos necessários
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.scss']
})
export class MinhaContaComponent implements OnInit {

  // Links que aparecerão na navegação lateral
  menuLinks: ContaLink[] = [
    { label: 'Meu Perfil', path: 'perfil', iconClass: 'fas fa-user' },
    { label: 'Meu Cashback', path: 'cashback', iconClass: 'fas fa-wallet' },
    { label: 'Meus Pedidos', path: 'pedidos', iconClass: 'fas fa-shopping-bag' },
    { label: 'Configurações', path: 'configuracoes', iconClass: 'fas fa-cog' },
  ];

  currentPage: string = 'perfil'; // Rastreia a seção ativa

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const tab = params.get('tab');
      if (tab && this.menuLinks.some((link) => link.path === tab)) {
        this.currentPage = tab;
      }
    });
  }

  // Método para navegar entre as abas
  navigateTo(path: string): void {
    this.currentPage = path;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { tab: path },
      replaceUrl: true
    });
  }
}
