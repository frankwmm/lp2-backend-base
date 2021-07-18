import { Component, Input, OnInit } from '@angular/core';
import { Asignatura } from '../../../models/asignaturas';

@Component({
  selector: 'app-asignaturalista',
  templateUrl: './asignaturalista.component.html',
  styleUrls: ['./asignaturalista.component.css']
})
export class AsignaturalistaComponent implements OnInit {
@Input() asignaturas: Asignatura[];

  constructor() { }

  ngOnInit(): void {
  }

}
