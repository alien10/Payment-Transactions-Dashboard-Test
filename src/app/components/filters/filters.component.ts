import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  startDate: string = '';
  endDate: string = '';
  selectedStatus: string = '';

  @Output() filterChange = new EventEmitter();

  onFilterChange() {
    this.filterChange.emit({
      startDate: this.startDate,
      endDate: this.endDate,
      status: this.selectedStatus,
    });
  }
}
