import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaMultisensorialComponent } from './experiencia-multisensorial.component';

describe('ExperienciaMultisensorialComponent', () => {
  let component: ExperienciaMultisensorialComponent;
  let fixture: ComponentFixture<ExperienciaMultisensorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaMultisensorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaMultisensorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
