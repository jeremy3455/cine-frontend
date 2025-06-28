import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../core/services/peliculas';
import { SalasService } from '../../core/services/salas';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.html'
})

export class OverviewComponent implements OnInit {

  totalPeliculas = 0;
  totalSalas = 0;
  salasDisponibles = 0;

  constructor(
    private peliculasService: PeliculasService,
    private salasService: SalasService
  ) {}

  ngOnInit(): void {
    this.peliculasService.obtenerTodas().subscribe(data => {
      this.totalPeliculas = data.length;
    });

    this.salasService.obtenerTodas().subscribe(salas => {
      this.totalSalas = salas.length;
      this.salasDisponibles = salas.filter((s: any) => s.estado === 'Disponible').length;
    });
  }
}