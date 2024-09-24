import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  imports: [RouterModule, FormsModule, ReactiveFormsModule, AlertaComponent ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginDTO: LoginDTO;
  alerta!:Alerta;

  constructor(private authService: AuthService, private tokenService: TokenService) {
    this.loginDTO = new LoginDTO();
  }

  public logearse() {
    this.authService.loginCliente(this.loginDTO).subscribe({
      next: (data) => {
        this.tokenService.login(data.respuesta.token);
      },
      error: (error) => {
        this.alerta = new Alerta(error.error.respuesta, 'danger');
      },
    });
  }
}
