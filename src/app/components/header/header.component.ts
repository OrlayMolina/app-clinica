import { Component } from '@angular/core';
import { RouterModule, Router  } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  mostrarElementos: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.verificarRuta();
    });
  }

  verificarRuta() {

    const rutaActual = this.router.url;
    if (rutaActual === '/login' || rutaActual === '/registro') {
      this.mostrarElementos = false;
    } else {
      this.mostrarElementos = true;
    }
  }
}
