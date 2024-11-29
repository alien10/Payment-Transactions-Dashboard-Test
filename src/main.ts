import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent],
  template: `
    <h1>{{ name }}!</h1>
    <app-dashboard></app-dashboard>
  `,
})
export class App {
  name = 'Payment Transactions Dashboard';
}

bootstrapApplication(App);
