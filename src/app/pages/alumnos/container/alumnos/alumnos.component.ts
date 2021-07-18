import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumnos';
import { AlumnosService } from 'src/providers/alumnos/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  error: string; 
  alumnos: Alumno[];
  alumno: Alumno;

  constructor(private alumnoService : AlumnosService) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos(): void{ 
    this.alumnoService.getAlumnosUsuarios().subscribe( response=>{
        this.alumnos = response.data;
        console.log(this.alumnos);
    }, error => {
      this.error = error; 
  
    });
  }
}
