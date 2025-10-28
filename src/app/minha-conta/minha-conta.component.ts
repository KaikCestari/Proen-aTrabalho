import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Necessário para *ngIf, *ngFor
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Interface para os links de navegação
interface ContaLink {
  label: string;
  path: string; // O segmento da rota (ex: 'dados-pessoais')
  iconClass: string; // Classe para ícone
}

@Component({
  selector: 'app-minha-conta',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule], // Importa módulos necessários
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.scss']
})
export class MinhaContaComponent implements OnInit {

  // Links que aparecerão na navegação lateral
  menuLinks: ContaLink[] = [
    { label: 'Editar Perfil', path: 'perfil', iconClass: 'fas fa-user' },
    { label: 'Resgatar Cashback', path: 'cashback', iconClass: 'fas fa-wallet' },
    { label: 'Alterar Senha', path: 'alterar-senha', iconClass: 'fas fa-lock' },
    { label: 'Meus Pedidos', path: 'pedidos', iconClass: 'fas fa-shopping-bag' }
  ];

  currentPage: string = 'perfil'; // Rastreia a seção ativa

  profileForm: FormGroup;
  passwordForm: FormGroup;
  cashbackForm: FormGroup;

  profileMessage: string | null = null;
  passwordMessage: string | null = null;
  passwordError: string | null = null;
  cashbackMessage: string | null = null;
  cashbackError: string | null = null;

  availableCashback = 45.5;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.profileForm = this.fb.group({
      name: ['João da Silva', [Validators.required, Validators.minLength(3)]],
      email: ['joao@exemplo.com', [Validators.required, Validators.email]],
      phone: ['(17) 98888-0000', [Validators.required]],
      document: ['123.456.789-00', [Validators.required]]
    });

    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });

    this.cashbackForm = this.fb.group({
      amount: [45.5, [Validators.required, Validators.min(10)]],
      pixKey: ['joao@exemplo.com', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {
    // Observa mudanças na rota para saber qual aba está ativa a partir do query param "aba"
    this.activatedRoute.queryParamMap.subscribe(params => {
      const tab = params.get('aba');
      if (tab && this.menuLinks.some(link => link.path === tab)) {
        this.currentPage = tab;
      } else {
        this.currentPage = 'perfil';
      }
    });
  }

  // Método para navegar entre as abas
  navigateTo(path: string): void {
    this.currentPage = path;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { aba: path },
      queryParamsHandling: 'merge'
    });

    this.profileMessage = null;
    this.passwordMessage = null;
    this.passwordError = null;
    this.cashbackMessage = null;
    this.cashbackError = null;
  }

  submitProfile(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      this.profileMessage = null;
      return;
    }

    this.profileMessage = 'Dados do perfil atualizados com sucesso.';
  }

  submitPassword(): void {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      this.passwordMessage = null;
      this.passwordError = null;
      return;
    }

    const { newPassword, confirmPassword } = this.passwordForm.value;

    if (newPassword !== confirmPassword) {
      this.passwordError = 'A confirmação precisa ser igual à nova senha.';
      this.passwordMessage = null;
      return;
    }

    this.passwordError = null;
    this.passwordMessage = 'Senha alterada com sucesso.';
    this.passwordForm.reset();
  }

  redeemCashback(): void {
    if (this.cashbackForm.invalid) {
      this.cashbackForm.markAllAsTouched();
      this.cashbackMessage = null;
      this.cashbackError = null;
      return;
    }

    const amount = Number(this.cashbackForm.value.amount);
    const pixKey = this.cashbackForm.value.pixKey ?? '';

    if (amount > this.availableCashback) {
      this.cashbackError = 'Valor solicitado é superior ao saldo disponível.';
      this.cashbackMessage = null;
      return;
    }

    this.availableCashback = Number((this.availableCashback - amount).toFixed(2));
    this.cashbackError = null;
    this.cashbackMessage = `Solicitação de resgate enviada no valor de R$ ${amount.toFixed(2)}.`;
    this.cashbackForm.reset({ amount: this.availableCashback, pixKey });
  }
}
