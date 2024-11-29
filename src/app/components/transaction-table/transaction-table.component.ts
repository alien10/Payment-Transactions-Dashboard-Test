import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-table',
  imports: [CommonModule],
  templateUrl: './transaction-table.component.html',
  styleUrl: './transaction-table.component.css',
})
export class TransactionTableComponent {
  @Input() transactions: Transaction[] = [];
  @Output() onDetails = new EventEmitter<Transaction>();

  statusClass(status: string): string {
    return status;
  }

  viewDetails(transaction: Transaction) {
    this.onDetails.emit(transaction);
  }
}
