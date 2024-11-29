import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-view',
  imports: [CommonModule],
  templateUrl: './transaction-view.component.html',
  styleUrl: './transaction-view.component.css',
})
export class TransactionViewComponent {
  @Input() transaction: Transaction | null = null;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
  
}
