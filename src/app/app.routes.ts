import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ActivarCuentaComponent } from './components/activar-cuenta/activar-cuenta.component';
import { CambiarPasswordComponent } from './components/cambiar-password/cambiar-password.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { EnviarCodigoComponent } from './components/enviar-codigo/enviar-codigo.component';
import { AgendaComponent } from './components/agenda/agenda.component';

export const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registro', component: RegistroComponent },
{ path: 'activar-cuenta', component: ActivarCuentaComponent },
{ path: 'crear-cita', component: CrearCitaComponent },
{ path: 'cambiar-password', component: CambiarPasswordComponent },
{ path: 'enviar-codigo', component: EnviarCodigoComponent },
{
  path: 'agendas',
  component: AgendaComponent//,
  /*children: [
    {
      path: '',
      loadChildren: () => import('./components/citas/citas.module').then(m => m.CitasModule),
    }
  ]*/
},
{ path: "**", pathMatch: "full", redirectTo: "" }
];
