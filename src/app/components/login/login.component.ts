import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LoginDTO } from '../../dto/login-dto';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { AlertaComponent } from '../alerta/alerta.component';
import { Alerta } from '../../dto/alerta';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AlertaComponent, FormsModule, RouterModule, ReactiveFormsModule] ,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginDTO: LoginDTO;
  alerta!:Alerta;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.loginDTO = new LoginDTO();
  }

  public logearse() {
    this.authService.loginCliente(this.loginDTO).subscribe({
      next: (data) => {
        // Guardar el token en el TokenService
        this.tokenService.login(data.respuesta.token);

        // Extraer el nombre y apellido del token
        const decodedToken = this.tokenService.decodePayload(data.respuesta.token);
        const usuario = {
          nombre: decodedToken.nombre,  // Asegúrate de que el token tenga estos campos
          apellido: decodedToken.apellido
        };

        // Establecer el usuario logueado en el AuthService
        this.authService.setUser(usuario);

        setTimeout(() => {
          this.router.navigate(['/agendas']);
        }, 1500);
      },
      error: (error) => {
        this.alerta = new Alerta(error.error.respuesta, 'danger');
      },
    });
  }
}
