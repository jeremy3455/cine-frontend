import { Component, OnInit } from '@angular/core';
import { SalasService } from '../../core/services/salas';
import { Router } from '../../../../node_modules/@angular/router/router_module.d';



@Component({
  selector: 'app-salas-list',
  imports: [],
  templateUrl: './salas-list.html',
  styleUrl: './salas-list.css'
})

export class SalasListComponent implements OnInit {

  salas: any[] = [];

  constructor(private salasService: SalasService, private router: Router) {}

  ngOnInit(): void {
    this.cargarSalas();
  }

  cargarSalas() {
    this.salasService.obtenerTodas().subscribe(data => {
      this.salas = data;
    });
  }

  editar(id: number) {
    this.router.navigate(['/salas/editar', id]);
  }

  eliminar(id: number) {
    if (confirm('¿Deseas eliminar esta sala?')) {
      this.salasService.eliminar(id).subscribe(() => this.cargarSalas());
    }
  }
}
