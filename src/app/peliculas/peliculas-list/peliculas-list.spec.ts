import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasList } from './peliculas-list';

describe('PeliculasList', () => {
  let component: PeliculasList;
  let fixture: ComponentFixture<PeliculasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
