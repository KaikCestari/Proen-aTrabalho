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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Observa mudanças na rota para saber qual aba está ativa
    this.activatedRoute.url.subscribe(urlSegments => {
      // Pega o primeiro segmento após /minha-conta/
      const segment = urlSegments[0]?.path || '/perfil'; 
      this.currentPage = segment;
    });
    
    // Opcional: Garante que ele inicie na aba 'perfil' se a URL estiver apenas em /minha-conta
    if (!this.activatedRoute.snapshot.firstChild) {
        this.router.navigate(['/perfil'], { relativeTo: this.activatedRoute });
    }
  }

  // Método para navegar entre as abas
  navigateTo(path: string): void {
    this.currentPage = path;
    // Navega para a rota relativa (ex: /minha-conta/cashback)
    // this.router.navigate([path], { relativeTo: this.activatedRoute });
  }
}