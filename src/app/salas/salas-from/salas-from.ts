import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router/router_module.d';
import { SalasService } from '../../core/services/salas';


@Component({
  selector: 'app-salas-from',
  imports: [],
  templateUrl: './salas-from.html',
  styleUrl: './salas-from.css'
})

export class SalasFormComponent implements OnInit {

  form!: FormGroup;
  editando = false;
  id!: number;

  estados = ['Disponible', 'No disponible'];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private salasService: SalasService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      estado: ['Disponible', Validators.required]
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.editando = true;
      this.salasService.obtenerPorId(this.id).subscribe(data => {
        this.form.patchValue(data);
      });
    }
  }

  guardar() {
    if (this.form.invalid) return;

    const accion = this.editando
      ? this.salasService.actualizar(this.id, this.form.value)
      : this.salasService.crear(this.form.value);

    accion.subscribe(() => this.router.navigate(['/salas']));
  }
}
