import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Alerta } from '../../dto/alerta';
import { AlertaComponent } from '../alerta/alerta.component';
import { CambiarPasswordDTO } from '../../dto/cambiar-password-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-password',
  standalone: true,
  imports: [ CommonModule, FormsModule, AlertaComponent],
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent {

  codigoActivacion: string = '';
  email: string = '';
  nuevaContrasena: string = '';
  confirmarContrasena: string = '';
  alerta!:Alerta;

  constructor(private authService: AuthService, private router: Router) {}

  onActualizar(): void {
    if (this.nuevaContrasena !== this.confirmarContrasena) {
      this.alerta = new Alerta('Las contraseñas no coinciden', 'danger');
      return;
    }

    // Crear el objeto CambiarPasswordDTO con los valores del formulario
    const cambiarPasswordDTO = new CambiarPasswordDTO(
      this.email,
      this.codigoActivacion,
      this.nuevaContrasena
    );

    this.authService.cambiarPassword(cambiarPasswordDTO).subscribe({
      next: (data) => {
        this.alerta = new Alerta('Contraseña actualizada correctamente', 'success');

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      },
      error: (error) => {
        this.alerta = new Alerta(error.error.respuesta, 'danger');
      }
    });
  }
}
