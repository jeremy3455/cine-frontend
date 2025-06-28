import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasFrom } from './peliculas-from';

describe('PeliculasFrom', () => {
  let component: PeliculasFrom;
  let fixture: ComponentFixture<PeliculasFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasFrom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasFrom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
