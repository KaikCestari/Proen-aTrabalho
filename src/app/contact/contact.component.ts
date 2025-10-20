import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section>
      <h1>Fale com a Proença</h1>
      <p>
        Estamos prontos para ajudar. Envie uma mensagem e nossa equipe retornará o contato rapidamente.
      </p>
      <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
        <div class="field">
          <label for="name">Nome</label>
          <input id="name" type="text" formControlName="name" placeholder="Seu nome" />
        </div>
        <div class="field">
          <label for="email">E-mail</label>
          <input id="email" type="email" formControlName="email" placeholder="voce@exemplo.com" />
        </div>
        <div class="field">
          <label for="message">Mensagem</label>
          <textarea id="message" rows="5" formControlName="message" placeholder="Como podemos ajudar?"></textarea>
        </div>
        <button type="submit" [disabled]="form.invalid">Enviar mensagem</button>
      </form>
      <aside>
        <h2>Visite uma unidade</h2>
        <p>Rua das Flores, 245 - Centro, Proença</p>
        <p>Telefone: (11) 4002-8922</p>
        <p>Horário de atendimento: 07h às 22h</p>
      </aside>
    </section>
  `,
  styles: [
    `
      form {
        display: grid;
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      input,
      textarea {
        padding: 0.75rem 1rem;
        border-radius: 0.75rem;
        border: 1px solid rgba(15, 118, 110, 0.35);
        font: inherit;
      }

      button {
        background: #0d9488;
        color: #fff;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 9999px;
        font-weight: 600;
        cursor: pointer;
        transition: filter 0.2s ease;
      }

      button:disabled {
        background: #94d5cc;
        cursor: not-allowed;
      }

      button:not(:disabled):hover {
        filter: brightness(1.05);
      }
    `
  ]
})
export class ContactComponent {
  readonly form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submit(): void {
    if (this.form.valid) {
      alert('Mensagem enviada! Em breve nossa equipe entrará em contato.');
      this.form.reset();
    }
  }
}
