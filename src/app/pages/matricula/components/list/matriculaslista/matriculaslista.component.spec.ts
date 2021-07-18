import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaslistaComponent } from './matriculaslista.component';

describe('MatriculaslistaComponent', () => {
  let component: MatriculaslistaComponent;
  let fixture: ComponentFixture<MatriculaslistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculaslistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
