import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs/dist/types/index';

@Injectable({ providedIn: 'root' })
export class PeliculasService {
  private apiUrl = 'http://localhost:5000/api/peliculas';

  constructor(private http: HttpClient) {}

  obtenerTodas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  crear(pelicula: any): Observable<any> {
    return this.http.post(this.apiUrl, pelicula);
  }

  actualizar(id: number, pelicula: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, pelicula);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
