import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoUniasComponent } from './estado-unias.component';

describe('EstadoUniasComponent', () => {
  let component: EstadoUniasComponent;
  let fixture: ComponentFixture<EstadoUniasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoUniasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoUniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
