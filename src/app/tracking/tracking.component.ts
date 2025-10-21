import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface TrackingStep {
  title: string;
  description: string;
  timestamp: string;
}

type TrackingStatus = 'processing' | 'separated' | 'out_for_delivery' | 'delivered';

interface TrackingOrder {
  code: string;
  status: TrackingStatus;
  statusLabel: string;
  eta: string;
  steps: TrackingStep[];
}

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, NgClass],
  templateUrl: './tracking.html',
  styleUrl: './tracking.scss'
})
export class TrackingComponent {
  readonly orders: TrackingOrder[] = [

    {
      code: 'PRC-1234',
      status: 'processing',
      statusLabel: 'Processando pedido',
      eta: 'Entrega prevista para 15/06 até 20h',
      steps: [
        {
          title: 'Pedido confirmado',
          description: 'Pagamento aprovado e conferido pelo time financeiro.',
          timestamp: '13/06 - 14:30'
        }
      ]
    },
    {
      code: 'PRC-4821',
      status: 'out_for_delivery',
      statusLabel: 'Saiu para entrega',
      eta: 'Entrega prevista para hoje até 18h',
      steps: [
        {
          title: 'Pedido confirmado',
          description: 'Pagamento aprovado e conferido pelo time financeiro.',
          timestamp: '12/06 - 09:12'
        },
        {
          title: 'Separação concluída',
          description: 'Itens conferidos e embalados com cuidado em nosso centro de distribuição.',
          timestamp: '12/06 - 11:45'
        },
        {
          title: 'Saiu para entrega',
          description: 'Nosso parceiro logístico saiu com o pedido para o endereço informado.',
          timestamp: '12/06 - 15:30'
        }
      ]
    },
    {
      code: 'PRC-9017',
      status: 'separated',
      statusLabel: 'Separação concluída',
      eta: 'Entrega prevista para amanhã até 14h',
      steps: [
        {
          title: 'Pedido confirmado',
          description: 'Pagamento aprovado e conferido pelo time financeiro.',
          timestamp: '11/06 - 18:50'
        },
        {
          title: 'Separação concluída',
          description: 'Itens conferidos e embalados com cuidado em nosso centro de distribuição.',
          timestamp: '12/06 - 08:05'
        }
      ]
    },
    {
      code: 'PRC-7750',
      status: 'delivered',
      statusLabel: 'Pedido entregue',
      eta: 'Entrega realizada em 10/06 às 17h25',
      steps: [
        {
          title: 'Pedido confirmado',
          description: 'Pagamento aprovado e conferido pelo time financeiro.',
          timestamp: '09/06 - 10:10'
        },
        {
          title: 'Separação concluída',
          description: 'Itens conferidos e embalados com cuidado em nosso centro de distribuição.',
          timestamp: '09/06 - 14:20'
        },
        {
          title: 'Saiu para entrega',
          description: 'Nosso parceiro logístico saiu com o pedido para o endereço informado.',
          timestamp: '10/06 - 12:05'
        },
        {
          title: 'Pedido entregue',
          description: 'Pedido entregue com sucesso para o responsável cadastrado.',
          timestamp: '10/06 - 17:25'
        }
      ]
    }
  ];

  readonly form = this.fb.nonNullable.group({
    code: [this.orders[0].code, [Validators.required, Validators.minLength(4)]]
  });
  result: TrackingOrder | null = this.orders[0];
  notFound = false;

  constructor(private readonly fb: FormBuilder) {}

  lookup(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const code = this.form.controls.code.value.trim().toUpperCase();
    const found = this.orders.find((order) => order.code === code) ?? null;

    this.result = found;
    this.notFound = !found;
  }

  fillCode(code: string): void {
    this.form.controls.code.setValue(code);
    this.result = this.orders.find((order) => order.code === code) ?? null;
    this.notFound = !this.result;
  }

  get codeControl() {
    return this.form.controls.code;
  }

  statusClass(order: TrackingOrder | null): string {
    if (!order) {
      return '';
    }

    switch (order.status) {
      case 'delivered':
        return 'tracking__status--delivered';
      case 'out_for_delivery':
        return 'tracking__status--out';
      case 'separated':
        return 'tracking__status--separated';
      default:
        return 'tracking__status--processing';
    }
  }

  trackStep(index: number, step: TrackingStep): string {
    return `${index}-${step.timestamp}`;
  }
}
