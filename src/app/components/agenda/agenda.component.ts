import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCitasComponent } from '../lista-citas/lista-citas.component';
import { RouterModule } from '@angular/router';
import { AlertaComponent } from '../alerta/alerta.component';
import { CuentaService } from '../../services/cuenta.service';
import { FormsModule } from '@angular/forms';
import { Alerta } from '../../dto/alerta';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, ListaCitasComponent, FormsModule, AlertaComponent, RouterModule],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {

  selectedFilter: string = '';
  searchQuery: string = '';
  selectedDate: string = '';
  appointments: any[] = [];
  alerta: Alerta | null = null;

  constructor(private cuentaService: CuentaService) {
    this.appointments = [];
  }

  obtenerAgendaPorEspecialidad(especialidad: string) {
    this.cuentaService.obtenerInformacionAgenda(especialidad).subscribe({
      next: (data) => {
        if (data.respuesta) {
          this.appointments = data.respuesta.informacionCitaDTO;
          console.log("Si hay citas")
          console.log(this.appointments);
        } else {
          console.log('No hay citas disponibles.');
        }
      },
      error: (error) =>
        this.alerta = new Alerta(error.error.respuesta, 'danger')
      });
  }

  obtenerAgendaPorProfesional(profesional: string) {
    this.cuentaService.obtenerInformacionAgendaPorProfesional(profesional).subscribe({
      next: (data) => {
        if (data.respuesta) {
          this.appointments = data.respuesta.informacionCitaDTO;
          console.log("Si hay citas")
          console.log(this.appointments);
        } else {
          console.log('No hay citas disponibles.');
        }
      },
      error: (error) =>
        this.alerta = new Alerta(error.error.respuesta, 'danger')
      });
  }

  selectFilter(filter: string) {
    this.selectedFilter = filter;
  }

  filterAppointments() {
    const searchParam = this.searchQuery || '';

    if (this.selectedFilter === 'Especialidad') {
      this.obtenerAgendaPorEspecialidad(searchParam);

      setTimeout(() => {
        this.alerta = null;
      }, 2000);

    } else if (this.selectedFilter === 'Médico') {
      this.obtenerAgendaPorProfesional(searchParam);

      setTimeout(() => {
        this.alerta = null;
      }, 2000);

    } else {
      console.log('Por favor selecciona un filtro válido.');
      this.alerta = new Alerta('Por favor selecciona un filtro válido.', 'danger');

      setTimeout(() => {
        this.alerta = null;
      }, 2000);
    }
  }
}
