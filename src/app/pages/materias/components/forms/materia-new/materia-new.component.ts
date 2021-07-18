import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-materia-new',
  templateUrl: './materia-new.component.html',
  styleUrls: ['./materia-new.component.css']
})
export class MateriaNewComponent implements OnInit {
  materiaForm: FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object> = new EventEmitter();


  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.materiaForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      detalle: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  public save(): void {
    if (this.materiaForm.valid) {
      this.activeModal.close(this.materiaForm.value);
    }

  }

}
