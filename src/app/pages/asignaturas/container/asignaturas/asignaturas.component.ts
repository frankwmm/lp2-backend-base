import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from 'src/providers/asignaturas/asignaturas.service';
import { Asignatura } from '../../models/asignaturas';


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

   error: string; 
   asignaturas: Asignatura[];

  constructor(private asignaturaService: AsignaturasService    ) { }

  ngOnInit(): void {
this.getAsignaturas();
   
  }


  getAsignaturas(): void {
      this.asignaturaService.getAsignaturas().subscribe( response => {
        this.asignaturas = response.data;
        console.log(this.asignaturas);
      }, error => {
        this.error = error;
      });
  }
}
