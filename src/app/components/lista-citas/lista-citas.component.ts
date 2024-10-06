import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-citas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-citas.component.html',
  styleUrl: './lista-citas.component.css'
})
export class ListaCitasComponent {

  @Input() appointments: any[] = [];
  showModal: boolean = false;
  selectedAppointment: any = null;

  openModal(appointment: any) {
    this.selectedAppointment = appointment;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedAppointment = null;
  }

}
