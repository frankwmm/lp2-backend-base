import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Materia} from '../../../models/materias';

@Component({
  selector: 'app-materia-edit',
  templateUrl: './materia-edit.component.html',
  styleUrls: ['./materia-edit.component.css']
})
export class MateriaEditComponent implements OnInit {
  @Input() materia: Materia;
  @Input() title: string;
  materiaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.materiaForm = this.formBuilder.group({
      nombre: [''],
      detalle: ['']
    });
  }
  ngOnInit(): void {
    if (this.materia) {
      this.materiaForm.patchValue({
        nombre: this.materia.nombre,
        detalle: this.materia.detalle
      });
    }
  }
  public edit(): void {
    if (this.materiaForm.valid) {
      this.activeModal.close(this.materiaForm.value);
    }
  }
}
