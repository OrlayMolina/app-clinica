import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroPacienteDTO } from '../dto/registro-paciente-dto';
import { InformacionAgendaDTO } from '../dto/informacion-agenda-dto';
import { MensajeDTO } from '../dto/mensaje-dto';
import { LoginDTO } from '../dto/login-dto';
import { Observable, BehaviorSubject } from 'rxjs';
import { CambiarPasswordDTO } from '../dto/cambiar-password-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = "http://localhost:8080/api/auth";
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }

  public registrarCliente(cliente: RegistroPacienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/crear-paciente`, cliente);
  }

  public activarCuenta(email: string, codigo: string): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/confirmar-cuenta`, { email, codigo});
  }

  public loginCliente(loginDTO: LoginDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/login`, loginDTO);
  }

  public obtenerInformacionAgenda(especialidad: string): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/obtener-agendas-especialidad`, especialidad);
  }

  public enviarCodigo(correo: string) : Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/enviar-codigo-password`, correo);
  }

  public cambiarPassword(datos: CambiarPasswordDTO) : Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/cambiar-password`, datos);
  }

  setUser(user: {nombre: string, apellido: string}) {
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
  }
}
