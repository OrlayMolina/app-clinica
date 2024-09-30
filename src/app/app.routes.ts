import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ActivarCuentaComponent } from './components/activar-cuenta/activar-cuenta.component';
import { CambiarPasswordComponent } from './components/cambiar-password/cambiar-password.component';
import { AgendaComponent } from './components/agenda/agenda.component';

export const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registro', component: RegistroComponent },
{ path: 'activar-cuenta', component: ActivarCuentaComponent },
{ path: 'cambiar-password', component: CambiarPasswordComponent },
{ path: 'agendas', component: AgendaComponent },
{ path: "**", pathMatch: "full", redirectTo: "" }
];
