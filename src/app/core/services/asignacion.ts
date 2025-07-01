import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAsignacionSala } from '../../asignacion/asignar-pelicula/models/IAsignacionSala';

@Injectable({ providedIn: 'root' })
export class AsignacionService {
  private apiUrl = 'http://localhost:5000/api/peliculassalacine';

  constructor(private http: HttpClient) {}

  asignar(datos: IAsignacionSala): Observable<IAsignacionSala> {
    return this.http.post(this.apiUrl, datos);
  }
}