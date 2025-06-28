import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms/index';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router/router_module.d';
import { PeliculasService } from '../../core/services/peliculas';



@Component({
  selector: 'app-peliculas-from',
  imports: [],
  templateUrl: './peliculas-from.html',
  styleUrl: './peliculas-from.css'
})

export class PeliculasFormComponent implements OnInit {

  form!: FormGroup;
  editando = false;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private peliculasService: PeliculasService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      duracion: [0, [Validators.required, Validators.min(30)]]
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.editando = true;
      this.peliculasService.obtenerPorId(this.id).subscribe(data => {
        this.form.patchValue(data);
      });
    }
  }

  guardar() {
    if (this.form.invalid) return;

    if (this.editando) {
      this.peliculasService.actualizar(this.id, this.form.value).subscribe(() => {
        this.router.navigate(['/peliculas']);
      });
    } else {
      this.peliculasService.crear(this.form.value).subscribe(() => {
        this.router.navigate(['/peliculas']);
      });
    }
  }
}