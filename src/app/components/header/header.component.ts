import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  mostrarElementos: boolean = true;
  isLoggedIn: boolean = false;
  nombreUsuario: string = '';
  apellidoUsuario: string = '';

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe(() => {
      this.verificarRuta();
    });

    // Suscribirse a los cambios de autenticación
    this.authService.user$.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
        this.nombreUsuario = user.nombre;
        this.apellidoUsuario = user.apellido;
      } else {
        this.isLoggedIn = false;
        this.nombreUsuario = '';
        this.apellidoUsuario = '';
      }
    });
  }

  verificarRuta() {
    const rutaActual = this.router.url;
    if (['/login', '/registro', '/activar-cuenta', '/cambiar-password'].includes(rutaActual)) {
      this.mostrarElementos = false;
    } else {
      this.mostrarElementos = true;
    }
  }
}
