import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCitasComponent } from '../lista-citas/lista-citas.component';
import { AlertaComponent } from '../alerta/alerta.component';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Alerta } from '../../dto/alerta';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, ListaCitasComponent, FormsModule, AlertaComponent],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {

  selectedFilter: string = '';
  searchQuery: string = '';
  selectedDate: string = '';
  appointments: any[] = [];
  alerta!:Alerta;

  constructor(private authService: AuthService) {
    this.appointments = [];
  }

  obtenerAgendaPorEspecialidad(especialidad: string) {
    this.authService.obtenerInformacionAgenda(especialidad).subscribe({
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

    const filterParam = this.searchQuery || '';

    this.obtenerAgendaPorEspecialidad(filterParam);
  }
}
