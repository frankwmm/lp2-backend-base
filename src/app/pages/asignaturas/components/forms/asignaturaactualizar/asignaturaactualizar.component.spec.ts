import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaactualizarComponent } from './asignaturaactualizar.component';

describe('AsignaturaactualizarComponent', () => {
  let component: AsignaturaactualizarComponent;
  let fixture: ComponentFixture<AsignaturaactualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturaactualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaactualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
