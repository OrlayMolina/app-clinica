import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Alerta } from '../../dto/alerta';
import { AlertaComponent } from '../alerta/alerta.component';
import { SedeDTO } from '../../dto/sede-dto';
import { AuthService } from '../../services/auth.service';
import { CuentaService } from '../../services/cuenta.service';
import { CrearCitaDTO } from '../../dto/crear-cita-dto';
import { EspecialidadDTO } from '../../dto/especialidad-dto';
import { PacienteDTO } from '../../dto/paciente-dto';
import { MedicoDTO } from '../../dto/medico-dto';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-crear-cita',
  standalone: true,
  imports: [AlertaComponent, FormsModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {

  crearCitaDTO: CrearCitaDTO;
  sedes: SedeDTO[];
  pacientes: PacienteDTO[];
  medicos: MedicoDTO[];
  especialidades: EspecialidadDTO[];
  consultorios: string[];
  alerta: Alerta | null = null;

  constructor(private authService: AuthService, private cuentaService: CuentaService, private router: Router, private tokenService: TokenService) {
    this.crearCitaDTO = new CrearCitaDTO();
    this.sedes = [];
    this.pacientes = [];
    this.medicos = [];
    this.especialidades = [];
    this.consultorios = [];
    this.cargarSedes();
    this.cargarPacientes();
    this.cargarMedicos();
    this.cargarEspecialidades();
    this.cargarConsultorios();
  }

  private cargarConsultorios() {
    this.consultorios = ["Consultorio 001", "Consultorio 002", "Consultorio 003", "Consultorio 004", "Consultorio 005"];
  }

  private cargarSedes() {
    this.authService.sedes().subscribe({
      next: (data) => {
        this.sedes = data.respuesta;
      },
      error: (error) => {
        console.log('Error al cargar las sedes', error);
      },
    });
  }

  private cargarPacientes() {
    this.authService.pacientes().subscribe({
      next: (data) => {
        this.pacientes = data.respuesta;
      },
      error: (error) => {
        console.log('Error al cargar los pacientes', error);
      },
    });
  }

  private cargarMedicos() {
    this.authService.medicos().subscribe({
      next: (data) => {
        this.medicos = data.respuesta;
      },
      error: (error) => {
        console.log('Error al cargar los médicos', error);
      },
    });
  }

  private cargarEspecialidades() {
    this.authService.especialidades().subscribe({
      next: (data) => {
        this.especialidades = data.respuesta;
      },
      error: (error) => {
        console.log('Error al cargar las especialidades', error);
      },
    });
  }

  crearCita() {

    const fechaCreacion = new Date().toISOString();
    const usuarioRegistro = this.crearCitaDTO.idPaciente;
    this.crearCitaDTO.fechaCreacion = fechaCreacion;
    this.crearCitaDTO.usuarioCreacion = usuarioRegistro;

    this.cuentaService.crearCita(this.crearCitaDTO).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.respuesta, 'success');
        console.log(this.crearCitaDTO);
        console.log(data.respuesta);
        setTimeout(() => {
          this.router.navigate(['/agendas']);
        }, 1500);
      },
      error: (error) => {
        console.log(this.crearCitaDTO);
        console.log(error.error.respuesta);
        this.alerta = new Alerta(error.error.respuesta, 'danger');
      }
    });
  }

}
