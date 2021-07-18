import { Component, EventEmitter, Input, OnInit , Output } from '@angular/core';
import { Alumno } from '../../../models/alumnos';
@Component({
  selector: 'app-alumnoslista',
  templateUrl: './alumnoslista.component.html',
  styleUrls: ['./alumnoslista.component.css']
})
export class AlumnoslistaComponent implements OnInit {
@Input() alumnos: Alumno[];

  constructor() { }

  ngOnInit(): void {
  }

}
