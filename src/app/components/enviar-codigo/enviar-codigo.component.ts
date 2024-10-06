import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Alerta } from '../../dto/alerta';
import { AlertaComponent } from '../alerta/alerta.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviar-codigo',
  standalone: true,
  imports: [CommonModule, FormsModule, AlertaComponent],
  templateUrl: './enviar-codigo.component.html',
  styleUrl: './enviar-codigo.component.css'
})
export class EnviarCodigoComponent {

  email: string = '';
  alerta!:Alerta;

  constructor (private authService: AuthService, private router: Router){}

  onActualizar(correo: string): void {

    this.authService.enviarCodigo(correo).subscribe({
      next: (data) => {
        this.alerta = new Alerta('Hemos enviado un código para actualizar su contraseña', 'success');

        setTimeout(() => {
          this.router.navigate(['/cambiar-password']);
        }, 1500);
      },
      error: (error) => {
        this.alerta = new Alerta(error.error.respuesta, 'danger');
      }
    });
  }

}
