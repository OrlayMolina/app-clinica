import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCitasComponent } from '../lista-citas/lista-citas.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, ListaCitasComponent, FormsModule],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {

  selectedFilter: string = '';
  searchQuery: string = '';
  selectedDate: string = '';
  appointments = [];

  selectFilter(filter: string) {
    this.selectedFilter = filter;
  }

  // This will trigger the appointment list rendering
  filterAppointments() {
    // logic to filter appointments by searchQuery, date, and selectedFilter
  }
}
