import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { HttpClient } from '@angular/common/http';
import { CrearCitaDTO } from '../dto/crear-cita-dto';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private cuentaURL = "http://localhost:8080/api/cuentas";

  constructor(private http: HttpClient) { }

  public obtenerInformacionAgenda(nombreEspecialidad: string): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.cuentaURL}/obtener-agendas-especialidad`, nombreEspecialidad);
  }

  public obtenerInformacionAgendaPorProfesional(nombreProfesional: string): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.cuentaURL}/obtener-agendas-profesional`, nombreProfesional);
  }

  public crearCita(cita: CrearCitaDTO) : Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.cuentaURL}/citas/crear-cita`, cita);
  }

}
