import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturalistaComponent } from './asignaturalista.component';

describe('AsignaturalistaComponent', () => {
  let component: AsignaturalistaComponent;
  let fixture: ComponentFixture<AsignaturalistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturalistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
