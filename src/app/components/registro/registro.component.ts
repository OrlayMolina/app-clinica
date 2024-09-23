import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistroPacienteDTO } from '../../dto/registro-paciente-dto';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ RouterModule, FormsModule, ReactiveFormsModule ],
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

  constructor() {
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
    this.planes = ["Plan Presencial", "Plan Premium", "Paciente sin Plan Complementario"];
  }

  private cargarDepartamentos() {
    this.departamentos = ["Caldas", "Risaralda", "Quindío"];
  }

  private cargarCiudades() {
    this.ciudades = ["Armenia", "Calárca", "Manizales", "Pereira", "Dosquebradas"];
  }

  public registrar() {
    console.log(this.registroPacienteDTO);
  }

  public sonIguales(): boolean {
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
  }

}
