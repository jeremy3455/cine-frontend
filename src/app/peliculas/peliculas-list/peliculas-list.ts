import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../core/services/peliculas';
import { Router } from '@angular/router'

@Component({
  selector: 'app-peliculas-list',
  imports: [],
  templateUrl: './peliculas-list.html',
  styleUrl: './peliculas-list.css'
})

export class PeliculasListComponent implements OnInit {

  peliculas: any[] = [];

  constructor(
    private peliculasService: PeliculasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas() {
    this.peliculasService.obtenerTodas().subscribe(data => {
      this.peliculas = data;
    });
  }

  editar(id: number) {
    this.router.navigate(['/peliculas/editar', id]);
  }

  eliminar(id: number) {
    if (confirm('¿Estás seguro de eliminar esta película?')) {
      this.peliculasService.eliminar(id).subscribe(() => {
        this.cargarPeliculas();
      });
    }
  }
}