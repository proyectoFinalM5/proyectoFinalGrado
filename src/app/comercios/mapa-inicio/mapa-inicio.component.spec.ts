import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaInicioComponent } from './mapa-inicio.component';

describe('MapaInicioComponent', () => {
  let component: MapaInicioComponent;
  let fixture: ComponentFixture<MapaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
