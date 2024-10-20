import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { HttpClient } from '@angular/common/http';
import { RegistroPacienteDTO } from '../dto/registro-paciente-dto';

@Injectable({
  providedIn: 'root'
})
export class PublicoService {

  private publicoURL = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  public registrarPaciente(paciente: RegistroPacienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publicoURL}/cuentas/crear-paciente`, paciente);
  }

}
