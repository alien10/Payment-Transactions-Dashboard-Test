import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor() {}

  private transactions: Transaction[] = [
    {
      transactionId: 'TXN001',
      customerName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      amount: 100.5,
      status: 'Success',
      date: '2024-11-01T10:15:30Z',
      paymentMethod: 'Credit Card',
      description: 'Payment for Order #1234',
    },
    {
      transactionId: 'TXN002',
      customerName: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+9876543210',
      amount: 250.0,
      status: 'Pending',
      date: '2024-11-02T12:30:45Z',
      paymentMethod: 'Bank Transfer',
      description: 'Payment for Order #5678',
    },
    {
      transactionId: 'TXN003',
      customerName: 'Mark Lee',
      email: 'mark.lee@example.com',
      phone: '+1112223333',
      amount: 75.25,
      status: 'Failed',
      date: '2024-11-03T09:00:00Z',
      paymentMethod: 'PayPal',
      description: 'Refund for Order #91011',
    },
  ];

  getTransactions(): Observable<Transaction[]> {
    return of(this.transactions);
  }
}
