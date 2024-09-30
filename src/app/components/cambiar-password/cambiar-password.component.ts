import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cambiar-password',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent {

  codigoActivacion: string = '';
  nuevaContrasena: string = '';
  confirmarContrasena: string = '';

  onActualizar(): void {
    if (this.nuevaContrasena !== this.confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (!this.codigoActivacion || !this.nuevaContrasena || !this.confirmarContrasena) {
      alert('Por favor, complete todos los campos');
      return;
    }

    // Lógica de actualización de contraseña
    alert('Contraseña actualizada con éxito');
  }
}
