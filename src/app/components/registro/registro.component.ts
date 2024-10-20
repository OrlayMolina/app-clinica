import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { RegistroPacienteDTO } from '../../dto/registro-paciente-dto';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicoService } from '../../services/publico.service';
import { AlertaComponent } from '../alerta/alerta.component';
import { Alerta } from '../../dto/alerta';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ RouterModule, FormsModule, ReactiveFormsModule, AlertaComponent ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registroPacienteDTO: RegistroPacienteDTO;
  ciudades: string[];
  departamentos: string[];
  planes: string[];
  regimenes: string[];
  nacionalidades: string[];
  tiposDocumento: string[];
  alerta!:Alerta;

  constructor(private publicoService: PublicoService, private authService: AuthService, private router: Router) {
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.ciudades = [];
    this.departamentos = [];
    this.planes = [];
    this.regimenes = [];
    this.nacionalidades = [];
    this.tiposDocumento =[];
    this.cargarCiudades();
    this.cargarDepartamentos();
    this.cargarPlanes();
    this.cargarRegimenes();
    this.cargarNacionalidades();
    this.cargarTiposDocumento();
  }

  private cargarTiposDocumento() {
    this.tiposDocumento = ["Cédula de Ciudadania", "Cédula de Extranjería", "Permiso Especial de Permanencia", "Registro Civil", "Tarjeta de Identidad"];
  }

  private cargarNacionalidades() {
    this.nacionalidades = ["ARGENTINA", "BRASILERA", "BOLIVIANA", "CHILENA", "COLOMBIANA", "ECUATORIANA", "PARAGUAYA", "PERUANA", "VENEZOLANA", "URUGUAYA"];
  }

  private cargarRegimenes() {
    this.regimenes = ["CONTRIBUTIVO", "SUBSIDIADO"];
  }

  private cargarPlanes() {
    this.planes = ["Plan Preferencial", "Plan Premium", "Paciente sin Plan Complementario"];
  }

  private cargarDepartamentos() {
    this.departamentos = ["Caldas", "Risaralda", "Quindío"];
  }

  private cargarCiudades() {
    this.ciudades = ["Armenia", "Calárca", "Manizales", "Pereira", "Dosquebradas"];
  }

  public registrar() {
    if (this.sonIguales()) {
      this.authService.registrarPaciente(this.registroPacienteDTO).subscribe({
        next: (data) => {
          this.alerta = new Alerta(data.respuesta, "success");

          setTimeout(() => {
            this.router.navigate(['/activar-cuenta']);
          }, 1500);
        },
        error: (error) => {

          this.alerta = new Alerta(error.error.respuesta, "danger");
        }
      });
    } else {
      this.alerta = new Alerta("Las contraseñas no coinciden", "danger");
    }
  }

  public sonIguales(): boolean {
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
  }

}
