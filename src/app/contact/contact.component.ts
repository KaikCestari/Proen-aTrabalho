import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="contact">
      <header class="contact__header">
        <h1>Fale com a Proença</h1>
        <p>
          Estamos prontos para ajudar. Envie uma mensagem e nossa equipe retornará o contato rapidamente.
        </p>
      </header>
      <div class="contact__grid">
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
          <div class="contact__banner">
            <strong>Whatsapp Proença</strong>
            <span>Atendimento rápido com especialistas</span>
          </div>
        </aside>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .contact {
        background: #fff;
        border-radius: 1.5rem;
        padding: clamp(2rem, 4vw, 3rem);
        box-shadow: 0 1.5rem 3rem rgba(7, 47, 107, 0.08);
        display: grid;
        gap: 2rem;
      }

      .contact__grid {
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
        gap: 2.5rem;
        align-items: start;
      }

      form {
        display: grid;
        gap: 1rem;
      }

      .field {
        display: grid;
        gap: 0.5rem;
      }

      input,
      textarea {
        padding: 0.85rem 1rem;
        border-radius: 0.85rem;
        border: 1px solid rgba(7, 47, 107, 0.2);
        font: inherit;
      }

      button {
        background: #0071ce;
        color: #fff;
        padding: 0.85rem 1.75rem;
        border: none;
        border-radius: 999px;
        font-weight: 700;
        cursor: pointer;
        transition: filter 0.2s ease;
      }

      button:disabled {
        background: #93c5fd;
        cursor: not-allowed;
      }

      button:not(:disabled):hover {
        filter: brightness(1.05);
      }

      aside {
        background: linear-gradient(180deg, rgba(0, 113, 206, 0.08) 0%, rgba(0, 113, 206, 0) 100%);
        border-radius: 1.25rem;
        padding: 1.75rem;
        display: grid;
        gap: 0.75rem;
      }

      .contact__banner {
        margin-top: 1rem;
        background: #001f3f;
        color: #fff;
        border-radius: 1rem;
        padding: 1rem 1.25rem;
        display: grid;
        gap: 0.25rem;
      }

      @media (max-width: 960px) {
        .contact__grid {
          grid-template-columns: 1fr;
        }
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
