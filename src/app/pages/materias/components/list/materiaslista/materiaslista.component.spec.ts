import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaslistaComponent } from './materiaslista.component';

describe('MateriaslistaComponent', () => {
  let component: MateriaslistaComponent;
  let fixture: ComponentFixture<MateriaslistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaslistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
