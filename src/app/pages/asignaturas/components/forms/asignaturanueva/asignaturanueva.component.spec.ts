import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturanuevaComponent } from './asignaturanueva.component';

describe('AsignaturanuevaComponent', () => {
  let component: AsignaturanuevaComponent;
  let fixture: ComponentFixture<AsignaturanuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturanuevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturanuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
