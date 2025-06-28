import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPelicula } from './asignar-pelicula';

describe('AsignarPelicula', () => {
  let component: AsignarPelicula;
  let fixture: ComponentFixture<AsignarPelicula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignarPelicula]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarPelicula);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
