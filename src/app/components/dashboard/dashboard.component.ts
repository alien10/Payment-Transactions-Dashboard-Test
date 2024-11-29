import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';
import { FiltersComponent } from '../filters/filters.component';
import { TransactionTableComponent } from '../transaction-table/transaction-table.component';
import { TransactionViewComponent } from '../transaction-view/transaction-view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    FiltersComponent,
    TransactionTableComponent,
    TransactionViewComponent,
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  selectedTransaction: Transaction | null = null;
  showModal: boolean = false;
  constructor(
    private transactionService: TransactionService,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
      this.filteredTransactions = data;
    });
  }
  applyFilters(filters: any) {
    const { startDate, endDate, status } = filters;
    this.filteredTransactions = this.transactions.filter((transaction) => {
      const date = new Date(transaction.date);
      return (
        (!startDate || date >= new Date(startDate)) &&
        (!endDate || date <= new Date(endDate)) &&
        (!status || transaction.status === status)
      );
    });
  }


  openModal(transaction: Transaction) {
    this.showModal = true;
    this.selectedTransaction = transaction;
    this.cdRef.detectChanges();
  }

  closeModal() {
    this.selectedTransaction = null;
    this.showModal = false;
  }
}
