import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginDTO } from '../../dto/login-dto';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginDTO: LoginDTO;

  constructor(){
    this.loginDTO = new LoginDTO();
  }

  public logearse() {
    console.log(this.loginDTO);
  }
}
