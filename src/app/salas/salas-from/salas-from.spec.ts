import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasFrom } from './salas-from';

describe('SalasFrom', () => {
  let component: SalasFrom;
  let fixture: ComponentFixture<SalasFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalasFrom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalasFrom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
