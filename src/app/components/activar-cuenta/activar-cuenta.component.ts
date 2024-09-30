import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activar-cuenta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activar-cuenta.component.html',
  styleUrls: ['./activar-cuenta.component.css']
})
export class ActivarCuentaComponent {

  codigo: string = '';

  onAceptar(): void {
    if (this.codigo.trim()) {
      alert(`Código ingresado: ${this.codigo}`);
    } else {
      alert('Por favor, ingrese el código de activación.');
    }
  }
}
