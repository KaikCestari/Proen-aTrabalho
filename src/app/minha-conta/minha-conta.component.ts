import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Necessário para *ngIf, *ngFor
import { FormsModule } from '@angular/forms';

// Interface para os links de navegação
interface ContaLink {
  label: string;
  path: string; // O segmento da rota (ex: 'dados-pessoais')
  iconClass: string; // Classe para ícone
}

@Component({
  selector: 'app-minha-conta',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule], // Importa módulos necessários
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

  profile = {
    nome: 'João da Silva',
    email: 'joao@exemplo.com'
  };

  editedProfile = { ...this.profile };
  isEditingProfile = false;
  profileMessage = '';

  cashbackSuccess = false;

  isChangingPassword = false;
  passwordForm = {
    current: '',
    nova: '',
    confirmacao: ''
  };
  passwordMessage = '';
  passwordError = '';

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

  startEditProfile(): void {
    this.isEditingProfile = true;
    this.editedProfile = { ...this.profile };
    this.profileMessage = '';
  }

  cancelEditProfile(): void {
    this.isEditingProfile = false;
    this.editedProfile = { ...this.profile };
  }

  saveProfile(): void {
    this.profile = { ...this.editedProfile };
    this.isEditingProfile = false;
    this.profileMessage = 'Dados do perfil atualizados com sucesso.';
  }

  resgatarSaldo(): void {
    this.cashbackSuccess = true;
    setTimeout(() => (this.cashbackSuccess = false), 4000);
  }

  iniciarAlteracaoSenha(): void {
    this.isChangingPassword = true;
    this.passwordMessage = '';
    this.passwordError = '';
    this.passwordForm = { current: '', nova: '', confirmacao: '' };
  }

  cancelarAlteracaoSenha(): void {
    this.isChangingPassword = false;
    this.passwordForm = { current: '', nova: '', confirmacao: '' };
    this.passwordError = '';
  }

  salvarNovaSenha(): void {
    const { current, nova, confirmacao } = this.passwordForm;
    if (!current || !nova || !confirmacao) {
      this.passwordError = 'Preencha todos os campos para alterar a senha.';
      this.passwordMessage = '';
      return;
    }

    if (nova !== confirmacao) {
      this.passwordError = 'As senhas digitadas não conferem.';
      this.passwordMessage = '';
      return;
    }

    this.passwordError = '';
    this.passwordMessage = 'Senha alterada com sucesso.';
    this.isChangingPassword = false;
    this.passwordForm = { current: '', nova: '', confirmacao: '' };
  }

  get senhaPodeSerSalva(): boolean {
    const { current, nova, confirmacao } = this.passwordForm;
    return Boolean(current && nova && confirmacao && nova === confirmacao);
  }
}
