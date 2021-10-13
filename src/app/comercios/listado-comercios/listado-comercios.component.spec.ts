import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComerciosComponent } from './listado-comercios.component';

describe('ListadoComerciosComponent', () => {
  let component: ListadoComerciosComponent;
  let fixture: ComponentFixture<ListadoComerciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoComerciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
