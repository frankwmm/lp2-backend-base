import { Component, EventEmitter, Input, OnInit , Output } from '@angular/core';
import { Alumno } from 'src/app/pages/alumnos/models/alumnos';

@Component({
  selector: 'app-matriculaslista',
  templateUrl: './matriculaslista.component.html',
  styleUrls: ['./matriculaslista.component.css']
})
export class MatriculaslistaComponent implements OnInit {
  @Input() alumnos: Alumno[];
  @Output() onNew: EventEmitter<object> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  public matricular(alumno : Alumno): void {
    this.onNew.emit(alumno);
    //console.log(alumno);
  }

}
