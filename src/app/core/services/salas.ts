import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs/dist/types/internal/Observable';

@Injectable({ providedIn: 'root' })
export class SalasService {
  private apiUrl = 'http://localhost:5000/api/salas'; 

  constructor(private http: HttpClient) {}

  obtenerTodas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  obtenerPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  crear(sala: any): Observable<any> {
    return this.http.post(this.apiUrl, sala);
  }

  actualizar(id: number, sala: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, sala);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

