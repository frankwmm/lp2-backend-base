import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoslistaComponent } from './alumnoslista.component';

describe('AlumnoslistaComponent', () => {
  let component: AlumnoslistaComponent;
  let fixture: ComponentFixture<AlumnoslistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoslistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
