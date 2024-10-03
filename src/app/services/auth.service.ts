import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroPacienteDTO } from '../dto/registro-paciente-dto';
import { InformacionAgendaDTO } from '../dto/informacion-agenda-dto';
import { MensajeDTO } from '../dto/mensaje-dto';
import { LoginDTO } from '../dto/login-dto';
import { Observable, BehaviorSubject } from 'rxjs';

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

  // Este método se llamaría después de un login exitoso
  setUser(user: {nombre: string, apellido: string}) {
    this.userSubject.next(user);
  }

  // Método para cerrar sesión
  logout() {
    this.userSubject.next(null);
  }
}
