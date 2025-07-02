import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculasService } from '../../core/services/peliculas';
import { SalasService } from '../../core/services/salas';
import { AsignacionService } from '../../core/services/asignacion';
import { IPelicula } from './models/IPelicula' ;
import { IAsignacionSala } from './models/IAsignacionSala';
import { ISalasDisponibles } from './models/ISalasDisponibles';



@Component({
  selector: 'app-asignar-pelicula',
  imports: [],
  templateUrl: './asignar-pelicula.html',
  styleUrl: './asignar-pelicula.css'
})

export class AsignarPeliculaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  peliculas: Ipelicula[] = [];
  salasDisponibles: ISalasDisponibles[] = [];

  constructor(
    private fb: FormBuilder,
    private peliculasService: PeliculasService,
    private salasService: SalasService,
    private asignacionService: AsignacionService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      idPelicula: ['', Validators.required],
      idSalaCine: ['', Validators.required],
      fechaPublicacion: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });

    this.peliculasService.obtenerTodas().subscribe(data => this.peliculas = data);

    this.salasService.obtenerTodas().subscribe(data => {
      this.salasDisponibles = data.filter((s: any) => s.estado === 'Disponible');
    });
  }

  asignar() {
    if (this.form.invalid) return;

    this.asignacionService.asignar(this.form.value).subscribe(() => {
      alert('Película asignada correctamente');
      this.form.reset();
    });
  }
}
