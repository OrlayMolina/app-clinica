import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicoService {

  private publicoURL = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }
  
}
