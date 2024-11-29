// src/app/models/transaction.model.ts
export interface Transaction {
  transactionId: string;
  customerName: string;
  email: string;
  phone: string;
  amount: number;
  status: 'Success' | 'Pending' | 'Failed';
  date: string;
  paymentMethod: string;
  description: string;
}
