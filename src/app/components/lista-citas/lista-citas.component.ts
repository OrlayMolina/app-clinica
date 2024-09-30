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
  @Input() doctorName: string = '';  // Definir la propiedad doctorName

  isModalOpen: boolean = false;
  selectedAppointment: any;

  openModal(appointment: any) {
    this.selectedAppointment = appointment;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
