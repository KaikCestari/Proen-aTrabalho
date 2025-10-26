import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface BeneficioCard {
  titulo: string;
  descricao: string;
  iconeClass: string;
  link?: string;
}

interface NivelClube {
  nome: string;
  requisito: string;
  vantagem: string;
  destaque: boolean;
}

@Component({
  selector: 'app-beneficios-clube-proenca',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './beneficios-clube-proenca.component.html',
  styleUrls: ['./beneficios-clube-proenca.component.scss']
})
export class BeneficiosClubeProencaComponent implements OnInit {

  // Dados de Exemplo para os Cards Principais
  beneficios: BeneficioCard[] = [
    {
      titulo: 'Cashback Imediato',
      descricao: 'Receba parte do valor de volta creditado instantaneamente na sua conta digital Proença.',
      iconeClass: 'fas fa-wallet', // Requer Font Awesome instalado
      link: '/cashback-detalhes'
    },
    {
      titulo: 'Preços Exclusivos',
      descricao: 'Acesse ofertas com até 50% de desconto em milhares de produtos todos os dias.',
      iconeClass: 'fas fa-tag', // Requer Font Awesome instalado
      link: '/ofertas-clube'
    },
    {
      titulo: 'Ofertas Relâmpago',
      descricao: 'Fique por dentro dos produtos com validade curta e descontos agressivos. (Como na sua tela!)',
      iconeClass: 'fas fa-bolt', // Requer Font Awesome instalado
      link: '/ofertas-diarias'
    },
    {
      titulo: 'Experiência Omnichannel',
      descricao: 'Compre no app, retire na loja ou receba em casa com vantagens de membro.',
      iconeClass: 'fas fa-store', // Requer Font Awesome instalado
      link: '/app-download'
    }
  ];

  niveis: NivelClube[] = [
    { nome: 'Clube Bronze', requisito: 'Cadastro simples', vantagem: 'Acesso a 5 ofertas semanais', destaque: false },
    { nome: 'Clube Prata', requisito: 'R$ 200 em compras/mês', vantagem: 'Cashback +2% extra', destaque: true },
    { nome: 'Clube Ouro', requisito: 'R$ 500 em compras/mês', vantagem: 'Frete Grátis em pedidos online', destaque: false },
  ];

  usuarioLogado: boolean = true; // Mude para true para simular um usuário logado

  // INJEÇÃO DE DEPENDÊNCIA DO ROUTER
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Você pode inicializar o estado de login aqui, se necessário
  }

  acaoPrincipal() {
    if (this.usuarioLogado) {
      console.log('Navegando para a área do cliente...');
      this.router.navigate(['/minha-conta']); // <-- IMPLEMENTAÇÃO: Navega para a área do cliente
    } else {
      console.log('Iniciando processo de cadastro...');
      this.router.navigate(['/cadastro']); // <-- IMPLEMENTAÇÃO: Navega para o cadastro
    }
  }
}