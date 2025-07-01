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

  form: FormGroup = new FormGroup({});
  editando = false;
  id: number = 0;

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

    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? Number(idParam) : 0;

    if (this.id) {
      this.editando = true;
      this.peliculasService.obtenerPorId(this.id).subscribe(data => {
        this.form.patchValue(data);
      });
    }
  }

  guardar() {
    if (this.form.invalid) return;

    const formValue = this.form.value;

    if (this.editando) {
      this.peliculasService.actualizar(this.id, formValue).subscribe(() => {
        this.router.navigate(['/peliculas']);
      });
    } else {
      this.peliculasService.crear(formValue).subscribe(() => {
        this.router.navigate(['/peliculas']);
      });
    }
  }
}
